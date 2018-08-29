<template>
    <div>
 
    
        <div class="Menu">Menu
 

        </div>
        <div class="Welcome">
              
            <div class="note">
    
                <h3>Welcome Amelia</h3>
    
                <ul>
                    <li>Please contact me</li>
                    <li>Sign a contract</li>
                    <li>open new shop</li>
                    <li>Call back to Sylvia</li>
                    <li>Write a letter to Sandra</li>
                </ul>
            </div>
    
            <div class="main_graph">
    
                <MainGraph/>

            </div>
    
            <div class="main_pie">
    
                <p>Project Beta progress</p>
  
                <Pie/>
            </div>
        </div>
    
    
    
        <div class="bottom">
          <div class="report">
    

            </div>
    

            <div class="feed">
  
            </div>
    
            <div class="alphaproject">
    
            </div>
  
        </div>
    
  
    
    </div>
</template>

<script>
import MainGraph from '@/components/page1Graph/MainGraph'
import Pie from '@/components/page1Graph/Pie'

export default {
    name: "page1",
    components: {
        MainGraph: MainGraph,
        Pie: Pie,
   
    }
}
const items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
]
   


</script>
<style scoped>
.Menu {
    width: 10%;
    height: 630px;
    background-color: #008000;
    float: left;
}

.Welcome {
    width: 90%;
    height: 210px;
    background-color: peru;
    float: left;
}

.note {
    width: 30%;
    height: 190px;
    background-color: palegreen;
    float: left;
}

.main_graph {
    width: 45%;
    height: 190px;
    background-color: orange;
    float: left;
}

.main_pie {
    width: 25%;
    height: 190px;
    background-color: rosybrown;
    float: left;
}

.bottom {
    width: 90%;
    height: 420px;
    background-color: skyblue;
    float: left;
}

.report {
    width: 30%;
    height: 420px;
    background-color: white;
    float: left;
}

.feed {
    width: 45%;
    height: 420px;
    background-color: cyan;
    float: left;
}

.alphaproject {
    width: 25%;
    height: 420px;
    background-color: palevioletred;
    float: left;
}
</style>
