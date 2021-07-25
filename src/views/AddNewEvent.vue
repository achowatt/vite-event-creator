<template>
  <div class="add-new-event-container">
    <div class="content-container">
      <h1 class="highlight-1">Create event</h1>
      <form @submit.prevent="onSubmit">
        <div id="step-1" class="form-group">
          <label for="project-title">Step 1: Band Name</label>
          <input
            type="text"
            name="project-title"
            id="project-title"
            v-model="title"
            placeholder="enter project title here"
            required
          />
        </div>
        <div id="step-2" class="form-group">
          <label for="project-description">Step 2: Add Description</label>
          <textarea
            type="text"
            name="project-description"
            id="project-description"
            v-model="description"
            placeholder="tell us about your awesome music"
            required
          />
        </div>
        <div id="step-3" class="form-group">
          <label for="" ref="step3heading">Step 3: Add your Band members</label>
          <p class="error" v-if="showError">Please add at least one member</p>
          <div class="band-images">
            <div
              v-for="({ id, imageUrl, fullName, jobTitle }, index) in users"
              :key="id"
            >
              <UserList
                :id="id"
                :imageUrl="imageUrl"
                :fullName="fullName"
                :jobTitle="jobTitle"
                :index="index"
                @add="add"
                @remove="remove"
                @openBio="openBio"
              />
            </div>
          </div>
        </div>
        <div id="step-4" class="form-group">
          <label for="concert-date">Step 4: concert date</label>
          <input type="date" id="concert-date" required />
        </div>
        <div id="step-5" class="form-group">
          <label for="concert-time">Step 5: concert time</label>
          <input type="time" id="concert-time" required />
        </div>
        <div id="step-6" class="form-group">
          <label for="concert-location">Step 6: location</label>
          <input type="text" id="concert-location" required />
        </div>
        <div id="step-7" class="form-group">
          <label for="concert-image">Step 7: Add Image</label>
          <!-- <input
            type="url"
            name="url"
            id="concert-image"
            placeholder="https://example-image.com"
            pattern="https://.*"
            size="30"
            required
          /> -->
          <input type="file" id="concert-image" :change="testImage" required />
        </div>
        <div id="step-8" class="confirm">
          <h1 class="highlight-1">
            Confirm and create
            <span class="highlight-2"> event!</span>
          </h1>
          <div class="confirm-project">
            <div class="group">
              <p class="confirm-title">Band Name:</p>
              <p>{{ title }}</p>
            </div>
            <div class="group">
              <p class="confirm-title">Description:</p>
              <p>{{ description }}</p>
            </div>
            <p class="confirm-title">Band Members:</p>
            <div class="group">
              <p class="confirm-title">Date:</p>
              <p>{{ date }}</p>
            </div>
            <div class="group">
              <p class="confirm-title">Time:</p>
              <p>{{ time }}</p>
            </div>
            <div class="group">
              <p class="confirm-title">Location:</p>
              <p>{{ location }}</p>
            </div>
          </div>
          <ul class="confirm-members">
            <li v-for="{ fullName, jobTitle, id } in chosenMembers" :key="id">
              <span>{{ fullName }}</span
              >{{ jobTitle }}
            </li>
          </ul>
          <button type="submit">Create event</button>
        </div>
      </form>
      {{ testImage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testImage: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.add-new-event-container {
  background: rgba(71, 71, 71, 0.61);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right top;
  filter: contrast(1.1);
  background-attachment: fixed;
  position: relative;
  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
    background-attachment: fixed;
    z-index: -1;
  }
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

  #step-3 {
    padding-bottom: 4rem;
    border-bottom: solid 1px rgb(228, 228, 228);
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #b4b3b3;
    opacity: 1; /* Firefox */
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;

    label {
      font-size: 1.5rem;
      color: rgb(255, 255, 255);
      font-weight: bold;
      font-family: "Bebas Neue", cursive;
      text-transform: uppercase;
      margin-bottom: 1rem;
      @media screen and (max-width: 740px) {
        font-size: 1.7rem;
      }
    }

    .error {
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
      font-size: 2rem;
      color: rgb(68, 68, 68);
      font-family: arial;
    }

    textarea {
      resize: none;
      height: auto;
    }

    input:focus + label {
      color: green;
    }
  }

  .band-images {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1rem;
    grid-row-gap: 1.5rem;
  }

  .confirm {
    max-width: 700px;
  }

  .confirm-project {
    p {
      font-weight: bold;
      line-height: 2;
    }
    .confirm-title {
      color: grey;
      border-bottom: solid 1px rgb(228, 228, 228);
    }
    .group {
      margin-bottom: 2rem;
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

    &:hover {
      background: rgb(0, 68, 255);
      color: white;
    }
  }
}
</style>
