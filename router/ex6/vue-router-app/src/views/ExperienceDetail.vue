<template>
  <section class="experience-details">
    <h2>Experiences</h2>
    <h3>{{ experience.name }}</h3>
    <img
      :src="require(`@/assets/${experience.image}`)"
      :alt="experience.name"
    />
    <p>{{ experience.description }}</p>
  </section>
</template>
<script>
import store from "@/store";
export default {
  name: "ExperienceDetail",
  props: {
    slug: {
      type: String,
      require: true
    },
    experienceSlug: {
      type: String,
      require: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    },
    experience() {
      return this.destination.experiences.find(
        experience => experience.slug === this.experienceSlug
      );
    }
  }
};
</script>
