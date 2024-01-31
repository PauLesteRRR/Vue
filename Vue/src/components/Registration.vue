<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <h1>World Skills Registration</h1>
                <hr>
                <p>On this page, participants are required to register their applications for the World Skills Competition as competitors. You need to organize and categorize them based on their Gender.</p>
                
            </div>
            <div class="col-md-12 ">
                <div class="border p-3 rounded bg-dark text-white">
                    <h2>Registration Form</h2>
                    <hr>
                    <div class="mt-2">
                        <label for="name">Name</label>
                        <input type="text" id="name" class="form-control">
                    </div>
                    <div class="mt-2">
                        <label for="age">Age</label>
                        <input type="number" id="age" class="form-control">
                    </div>
                    <div class="mt-2">
                        <label for="country">Country</label>
                        <input type="text" id="country" class="form-control">
                    </div>
                    <div class="mt-2">
                        <label for="gender">Gender</label>
                        <select id="gender" class="form-control">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div class="mt-2">
                        <label for="skill">Skill Area</label>
                        <select id="skill" class="form-control">
                            <option value="Plumbing and Heating">Plumbing and Heating</option>
                            <option value="Refrigeration and Airconditioning">Refrigeration and Airconditioning</option>
                            <option value="Welding Technology">Welding Technology</option>
                            <option value="Electrical Installation and Maintenance">Electrical Installation and Maintenance</option>
                        </select>
                    </div>
                    <div class="mt-2">
                        <button class="btn btn-warning" @click="calculateAndStore">Submit</button>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mt-5">
                <div class="border rounded p-3">
                    <h3 class="bg-success p-2 text-center text-white">Male Participants</h3>
                    <hr>
                    <table class="table table-bordered table-stripe">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Country</th>
                                <th>Skill Area</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="datas in arr" :key="datas.id">
                                <template v-if="datas.gender == `Male`">
                                    <td>{{datas.name}}</td>
                                    <td>{{datas.age}}</td>
                                    <td>{{datas.country}}</td>
                                    <td>{{datas.skill}}</td>
                                </template>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-6 mt-5">
                <div class="border rounded p-3">
                        <h3 class="text-center bg-warning p-2">Female Participants</h3>
                        <hr>
                        <table class="table table-bordered table-stripe">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Country</th>
                                    <th>Skill Area</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="datas in arr" :key="datas.id">
                                    <template v-if="datas.gender == `Female`">
                                        <td>{{datas.name}}</td>
                                        <td>{{datas.age}}</td>
                                        <td>{{datas.country}}</td>
                                        <td>{{datas.skill}}</td>
                                    </template>
                                </tr>
                            </tbody>
                        </table>
                </div>
                </div>
        </div>
    </div>
</template>

<script>
 import { ref } from 'vue';
 
export default {
  name: 'BmiComponent',
  setup(){
        const arr = ref([])

        function calculateAndStore(){

            const name = document.querySelector('#name')
            const age = document.querySelector('#age')
            const gender = document.querySelector('#gender')
            const country = document.querySelector('#country')
            const skill = document.querySelector('#skill')

            const data = { 
                name: name.value,
                age: age.value,
                gender: gender.value,
                country: country.value, 
                skill: skill.value 
            }

            arr.value.push(data)
        }
        return {
            arr,
            calculateAndStore
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>