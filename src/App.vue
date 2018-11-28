<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-button @click="handleClick">Test Button 2</v-button>
      <form ref="form1" id="tlh-form" class="example basic flex-rw">
        <form-first-name v-model="submit.firstName" label="First Name"></form-first-name>
        <form-email v-model="submit.email" />
        <form-legal-text></form-legal-text>
        <form-submit :disableOnErrors="true" text="Get New"></form-submit>
        <form-legal-text school="Alvernia University" fontSize="1.1em" textColor="blue" />
      </form>

      <!-- <CustomModules/> -->
    </v-content>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <v-list>
        <v-card heading="Card Header">
          <p slot="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eius corrupti a sint recusandae neque dolorum distinctio cupiditate. Unde non, odit praesentium odio, voluptate laboriosam eos quod vero ipsa nemo.</p>
          <div slot="footer">Card Footer</div>
        </v-card>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import CustomModules from "./components/CustomModules";

export default {
  name: "App",
  components: {
    CustomModules
  },
  data () {
    return {
      submit: {
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
      },
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  methods: {
    handleClick () {
      alert('Worked!')
    }
  }
};
</script>
