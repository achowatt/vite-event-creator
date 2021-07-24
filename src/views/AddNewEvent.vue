<template>
  <div class="add-new-event-container">
    <div class="content-container">
      <h1>Create event</h1>
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
          <label for="" ref="step3heading"
            >Step 3: Choose your team members</label
          >
          <p class="error" v-if="showError">
            Please choose at least one member
          </p>
          <div class="team-images">
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
        <div id="step-4" class="confirm">
          <h1>
            Confirm and book
            <span class="highlight-2"> your amazing band!</span>
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
            <p class="confirm-title">Team Members:</p>
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.add-new-event-container {
  /* background-image: url("https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,w_1169/v1627092985/interiordesign/concert-creator-app/ania-archer-HKElze1ixZY-unsplash_ozqwwx.jpg"); */
  background: black;
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
    background: linear-gradient(
      to bottom,
      rgb(0, 0, 0),
      rgba(255, 255, 255, 0) 15% 90%,
      rgb(0, 0, 0)
    );
    background-attachment: fixed;
    z-index: -1;
  }
  .content-container {
    max-width: 1200px;
    padding: 2rem;
    margin: 0 auto;
  }
  .concert-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1rem;
    grid-row-gap: 1.5rem;
  }
}
</style>
