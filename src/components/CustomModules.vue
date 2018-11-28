<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
  <v-card heading="Card Header">
    <p slot="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eius corrupti a sint recusandae neque dolorum distinctio cupiditate. Unde non, odit praesentium odio, voluptate laboriosam eos quod vero ipsa nemo.</p>
    <div slot="footer">Card Footer</div>
  </v-card>        
        <vue-editor
          :editor-options="editorSettings"
          placeholder="Placeholder text via prop"
          v-model="content">
        </vue-editor>
  <v-card heading="Card Header">
    <p slot="body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eius corrupti a sint recusandae neque dolorum distinctio cupiditate. Unde non, odit praesentium odio, voluptate laboriosam eos quod vero ipsa nemo.</p>
    <div slot="footer">Card Footer</div>
  </v-card>        
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
/* eslint-disable */

import { VueEditor, Quill } from "vue2-editor";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";

Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/imageDrop", ImageDrop);

export default {
  components: { VueEditor },
  name: "CustomModules",
  data: () => ({
    editorSettings: {
      modules: {
        imageDrop: true,
        imageResize: true
      }
    },
    content: ""
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
