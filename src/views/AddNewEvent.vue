<template>
  <div>
    <BioModal v-if="modal.opened" :info="modal.info" @closeBio="closeBio" />
    <div class="add-new-event-container">
      <div class="content-container">
        <h1 class="highlight-1">Create event</h1>
        <form @submit.prevent="onSubmit">
          <div id="step-1" class="form-group">
            <label for="band-name" :class="{ done: band.length > 0 }"
              >Step 1: Band Name</label
            >
            <input
              type="text"
              name="band-name"
              id="band-name"
              v-model="band"
              placeholder="enter band name here"
              required
            />
          </div>
          <div id="step-2" class="form-group">
            <label
              for="band-description"
              :class="{ done: description.length > 0 }"
              >Step 2: Add Description</label
            >
            <textarea
              type="text"
              name="band-description"
              id="band-description"
              v-model="description"
              placeholder="tell us about your awesome music"
              required
            />
          </div>
          <div id="step-3" class="form-group">
            <label
              for="band-images"
              ref="step3heading"
              :class="{ done: chosenMusicians.length > 0 }"
              >Step 3: Add your Band members</label
            >
            <div class="band-images" id="band-images">
              <div
                v-for="({ id, image, fullName }, index) in musicians"
                :key="id"
              >
                <MusicianList
                  :id="id"
                  :image="image"
                  :fullName="fullName"
                  :index="index"
                  @add="add"
                  @remove="remove"
                  @openBio="openBio"
                />
              </div>
            </div>
            <p class="error" v-if="showError">Please add at least one member</p>
          </div>
          <div id="step-4" class="form-group">
            <label for="concert-date" :class="{ done: date.length > 0 }"
              >Step 4: concert date</label
            >
            <input type="date" id="concert-date" v-model="date" required />
          </div>
          <div id="step-5" class="form-group">
            <label for="concert-time" :class="{ done: time.length > 0 }"
              >Step 5: concert time</label
            >
            <input type="time" id="concert-time" v-model="time" required />
          </div>
          <div id="step-6" class="form-group">
            <label for="concert-location" :class="{ done: location.length > 0 }"
              >Step 6: location</label
            >
            <input
              type="text"
              id="concert-location"
              v-model="location"
              placeholder="Address, City"
              required
            />
          </div>
          <div id="step-7" class="form-group">
            <label for="concert-image" :class="{ done: bandImage.length > 0 }"
              >Step 7: Add Image URL</label
            >
            <input
              type="url"
              id="concert-image"
              v-model="bandImage"
              required
              placeholder="https://www.example-image.com"
            />
          </div>
          <div class="confirm-container">
            <div
              id="step-8"
              class="confirm"
              v-if="
                band && description && date && time && location && bandImage
              "
            >
              <h1 class="highlight-1">
                Confirm and create
                <span class="highlight-2"> event!</span>
              </h1>
              <div class="confirm-project">
                <div class="group">
                  <p class="confirm-title">Band</p>
                  <p>{{ band }}</p>
                </div>
                <div class="group">
                  <p class="confirm-title">Description</p>
                  <p>{{ description }}</p>
                </div>
                <div class="group-preview">
                  <p class="confirm-title">Image</p>
                  <div class="image-preview" id="preview">
                    <img v-if="bandImage" :src="bandImage" />
                  </div>
                </div>
                <div class="group">
                  <p class="confirm-title">Musicians</p>
                  <p if="chosenMembers">
                    {{ confirmedMembers }}
                  </p>
                </div>
                <div class="group">
                  <p class="confirm-title">Date</p>
                  <p>{{ date }}</p>
                </div>
                <div class="group">
                  <p class="confirm-title">Time</p>
                  <p>{{ time }}</p>
                </div>
                <div class="group">
                  <p class="confirm-title">Location</p>
                  <p>{{ location }}</p>
                </div>
              </div>
              <Lottie v-if="formSubmitting" />
            </div>
            <button type="submit">Create event</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { createConcert, fetchMusicians } from "@/firebase.js";
import MusicianList from "@/components/MusicianListForm.vue";
import BioModal from "@/components/BioModal.vue";
import Lottie from "@/components/lottie.vue";

export default {
  components: { MusicianList, BioModal, Lottie },
  data() {
    return {
      band: "",
      description: "",
      date: "",
      time: "",
      location: "",
      bandImage: "",
      musicians: [],
      chosenMusicians: [],
      modal: { opened: false, info: {} },
      showError: false,
      done: "done",
      formSubmitting: false,
    };
  },
  computed: {
    confirmedMembers() {
      return this.chosenMusicians
        .map((m) => m.fullName + " (" + m.instrument.toUpperCase() + ")")
        .join(", ");
    },
  },
  methods: {
    onSubmit() {
      //Error detection - at least 1 musician must be chosen
      if (this.chosenMusicians.length === 0) {
        this.showError = true;
        this.$refs.step3heading.scrollIntoView({ behavior: "smooth" });
        return;
      }

      const bandInfo = {
        band: this.band,
        description: this.description,
        date: this.date,
        time: this.time,
        location: this.location,
        bandImage: this.bandImage,
        musicians: this.chosenMusicians,
        slug: this.convertToSlug(this.band),
      };

      //play animation before changing route
      this.animation();

      //send info to firebase after 3s of animation
      setTimeout(() => {
        createConcert(bandInfo).then((docRef) => {
          this.$router.push({
            path: `/concerts/${docRef.id}/${bandInfo.slug}`,
          });
        });
      }, 1500);
    },
    animation() {
      this.formSubmitting = true;
    },
    convertToSlug(band) {
      return band.toLowerCase().split(" ").join("-");
    },
    add(id) {
      const chosen = this.musicians.filter(
        (musicians) => musicians.id == id
      )[0];
      this.chosenMusicians.push(chosen);
      this.showError = false;
    },
    remove(removeId) {
      this.chosenMusicians = this.chosenMusicians.filter(
        (chosen) => chosen.id !== removeId
      );
    },
    openBio(id) {
      this.modal.info = this.musicians.filter(
        (musicians) => musicians.id == id
      )[0];
      this.modal.opened = true;
    },
    closeBio() {
      this.modal.opened = false;
    },
  },
  created() {
    fetchMusicians().then((musicians) => (this.musicians = musicians));
  },
};
</script>

<style lang="scss" scoped>
.add-new-event-container {
  .content-container {
    max-width: 1200px;
    padding: 2rem;
    margin: 0 auto;
  }

  .highlight-1 {
    color: #ffc165;
  }

  .highlight-2 {
    color: #6bf3f8;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #3a3a3a;
    opacity: 1; /* Firefox */
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;

    label {
      font-size: 1.5rem;
      font-weight: bold;
      font-family: "Zen Loop", sans-serif;
      text-transform: uppercase;
      margin-bottom: 1rem;
      @media screen and (max-width: 740px) {
        font-size: 1.7rem;
      }
    }

    .error {
      margin-top: 1rem;
      margin-bottom: 0;
      font-size: 1rem;
      color: red;
      font-weight: bold;
    }

    input {
      height: 4rem;
    }
    input,
    textarea {
      border: none;
      padding: 1rem 1rem;
      border-bottom: solid 1px #e4e4e4;
      font-size: 1.5rem;
      color: rgb(68, 68, 68);
      font-family: Avenir, Helvetica, Arial, sans-serif;
      border-radius: 5px;
    }

    textarea {
      resize: none;
      height: auto;
    }
  }

  .band-images {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1rem;
    grid-row-gap: 1.5rem;
  }

  .confirm-container {
    position: relative;
  }

  .confirm {
    max-width: 700px;
  }

  .confirm-project {
    .group-preview {
      color: orange;
      margin-bottom: 2rem;
    }
    .group {
      display: flex;
      @media screen and (max-width: 400px) {
        flex-direction: column;
      }
      p {
        line-height: 2;
      }
      p:first-child {
        flex: 3;
        color: orange;
      }
      p:last-child {
        flex: 8;
      }
    }
  }

  .confirm-members {
    max-width: 800px;
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    padding-left: 1rem;
    list-style: none;
    padding: 0;
    margin-top: 1rem;
    li {
      margin-right: 2rem;
      margin-bottom: 1rem;
      text-transform: lowercase;
    }
    span {
      font-weight: bold;
      display: block;
      text-transform: uppercase;
    }
  }

  .flex-container {
    display: flex;
  }

  button[type="submit"] {
    margin-top: 2rem;
    width: 100%;
    padding: 1rem;
    background: #6bf3f8;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    transition: background 0.3s;
    font-family: "Zen Loop", sans-serif;
    font-size: 2rem;

    &:hover {
      background: rgb(0, 68, 255);
      color: white;
    }
  }
  .image-preview img {
    width: 100%;
    height: auto;
  }

  .done {
    color: rgb(255, 145, 0);
  }
}
</style>
