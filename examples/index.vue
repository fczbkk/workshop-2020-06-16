<template>
  <div class="wrapper">

    <h1>Async component</h1>

    <AsyncComponent />

    <h1>Dashboard</h1>

    <div>
      <component :is="currentComponent" />
      <button @click="swichComponents">Show other component</button>
    </div>

    <WrapperComponent title="Prva komponenta">
      Toto je obsah wrapper komponenty
      <p>Toto je odstavec</p>
      <FirstComponent />
    </WrapperComponent>

    <WrapperComponent>
      <template slot="title">
        Druha komponenta
        <a href='http://google.com'>Google</a>
      </template>
      <SecondComponent />
    </WrapperComponent>


    <FormRow>
      <template slot="label">FirstName</template>
      <input type="text">
    </FormRow>
    <FormRow>
      <template slot="label">Last Name</template>
      <input type="text">
    </FormRow>
    <FormRow>
      <template slot="label">Middle Name</template>
      <input type="text">
    </FormRow>





    <UsersList />

    <FullNameEditor v-model="fullName"/>
    <p>
      Parent editor:
      <input type="text" v-model="fullName">
    </p>
    <p>Full name: {{ fullName }}</p>
  </div>
</template>

<script>
  import FullNameEditor from './FullNameEditor.vue'
  import UsersList from './UsersList'
  import FirstComponent from './FirstComponent'
  import SecondComponent from './SecondComponent'
  import WrapperComponent from './WrapperComponent'
  import FormRow from './FormRow'
  import { validateEmail } from './formUtilities'

  export default {
    components: {
      AsyncComponent: () => import('./AsyncComponent.vue'),
      FormRow,
      WrapperComponent,
      UsersList,
      FullNameEditor,
      FirstComponent,
      SecondComponent
    },
    data () {
      return {
        fullName: 'Riki Fridrich',
        currentComponent: FirstComponent
      }
    },
    methods: {
      handleNameChange (newFullName) {
        this.fullName = newFullName
      },
      swichComponents () {
        this.currentComponent = (this.currentComponent === FirstComponent) ? SecondComponent : FirstComponent
      }
    }
  }
</script>

<style scoped>
</style>
