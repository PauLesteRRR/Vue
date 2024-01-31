<template>
    <div id="bmicalculator" class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <h1>Instructions</h1>
                <hr>
                <p>On this World Skills competitor page, individuals can determine their BMI for competition eligibility by inputting their height and weight. Calculate the BMI using the provided formula and then create a script to categorize the BMI into the respective types. Additionally, the script should determine if the competitor meets the qualification criteria. Refer to the formula and representations below. </p>
                <h3>BMI Categories:</h3>
                <hr>
                <p>Underweight = 18.5 <span class="text-danger">Not-Qualified</span></p>
                <p>Normal weight = 18.5–24.9 <span class="text-success">Qualified</span></p>
                <p>Overweight = 25–29.9 <span class="text-warning">Qualified</span></p>
                <p>Obesity = BMI of 30 or greater <span class="text-danger">Not-Qualified</span></p>
                
                <h3>Formula</h3>
                <hr>
                <p>BMI = weight(Kg) / height(m) * height(m)</p>
                <hr>
            </div>
            <div class="col-md-6 ">
                <div class="border p-3 rounded bg-warning">
                    <h2>BMI Calculator</h2>
                    <hr>
                    
                    <div class="mt-2">
                        <label for="weight">Weight</label>
                        <input type="number" id="weight" class="form-control">
                    </div>
                    <div class="mt-2">
                        <label for="height">Height</label>
                        <input type="number" id="height" class="form-control">
                    </div>
                    <div class="mt-2">
                        <button class="btn btn-success" id="calculate" @click="calculate">Calculate</button>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="border rounded p-3 bg-success text-white">
                    

                    <h3>Calculation</h3>
                    <hr>
                    <p class="text-warning">BMI = <span id="weight_value">{{w}}</span> Kg / <span id="height_value">{{h}}</span> m<sup>2</sup></p>

                    <h4>BMI = <span id="bmi">{{bmi}}</span></h4>
                    <h4>BMI Category = <span class="text-info" id="bmicategory">{{category}}</span></h4>
                    <h4>Status = <span class="text-info" id="status">{{status}}</span></h4>
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
            let w = ref(0)
            let h = ref(0)
            let bmi = ref(0.0)
            let category = ref("Unknown")
            let status = ref("Unknown")

            function calculate(){
                //no declaration needed for unhyphened Id's, It's Vue's magic
                const weight = document.querySelector('#weight')
                const height = document.querySelector('#height')
                w.value = weight.value
                h.value = height.value

                bmi.value = w.value / (h.value * h.value) 

                if(bmi.value < 18.5){
                    category.value = 'Underweight'
                    status.value = 'Not-Qualified'
                }else if(bmi.value < 24.9){
                    category.value = 'Normal'
                    status.value = 'Qualified'
                }else if(bmi.value < 29.9){
                    category.value = 'Overweight'
                    status.value = 'Qualified'
                }else{
                    category.value = 'Obesity'
                    status.value = 'Not-Qualified'
                }
            }
      return {
        w, h, category, bmi, status,
        calculate
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>