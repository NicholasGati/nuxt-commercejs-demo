<template>
  <div>
    <Navbar :override-show="true" />
    <div class="container">
      <div class="section">
        <div class="columns is-multiline is-vcentered">
          <div
            class="column is-half is-offset-one-quarter-tablet is-full-mobile"
          >
            <h1 class="title">Contact Us</h1>
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Your name" />
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="hello@" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p class="help is-danger is-hidden">This email is invalid</p>
            </div>

            <div class="field">
              <label class="label">Subject</label>
              <div class="control">
                <div class="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>General Inquiry</option>
                    <option>Sales</option>
                    <option>Returns</option>
                    <option>Careers</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Your message here..."
                ></textarea>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $commerce }) {
    const { data: products } = await $commerce.products.list()
    return {
      products,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 8rem;
  padding-bottom: 4rem;
}
</style>
