<template>
    <div class="Body_Set">
         

        <div class="blank"></div>
            <div class="menu">
        <div class="menu_Top"></div> 
          <div style="float: clear">  <h4>Menu</h4></div>
                <br>
        
                <P><router-link to="page1">Education</router-link></P>
                <P><router-link to="page2">Development</router-link></P>
                <P><router-link to="page3">Entership</router-link></P>
                <P><router-link to="page4">Prosperity</router-link></P>

        </div>
        

            <div style="background-color:#50C2FF" class="positionDiv_Top">
                <br><br>
                <h5>EDUCATION</h5>
               
                <p>Talented people are the source of innovation. Tracking measures of human capital helps gauge the availability of a skilled workforce, particularly in important technical fields.</p>
            </div>
            <div style="background-color:#96C7ED" class="positionDiv_Top">
                <br><br>
                <h5>DEVELOPMENT</h5>
                <p>Investment in Research and Development (R&D) is critical for the accumulation of knowledge and developing new products and services that will drive regional growth and prosperity.</p>
            </div>
            <div style="background-color:#64CD3C" class="positionDiv_Top">
                <br><br>
                <h5>ENTREPRENEURSHIP</h5>
                <p>Entrepreneurial capacity determines Hawaii’s ability to generate new business activities through the development of new ideas and innovation.</p>
            </div>
            <div style="background-color:#FF8200" class="positionDiv_Top">
                <br> <br>
                <h5>PROSPERITY</h5>
                <p>If innovation is the key to long run economic growth, a key outcome is higher living standards and economic prosperity. Hawaii growth has fallen behind the nation since the 1990s.</p>

            </div>
            <div class="positionDiv">
                <Graph1/> 
            </div>
            <div class="positionDiv">
              <Graph2/>
            </div>   
            <div class="positionDiv">
                <Graph3/>
            </div>
            <div class="positionDiv">
                   <Graph4/> 
            </div>

    </div>    
</template>

<script>
import Graph1 from '@/components/chart/Graph1'
import Graph2 from '@/components/chart/Graph2'
import Graph3 from '@/components/chart/Graph3'
import Graph4 from '@/components/chart/Graph4'

export default {
    name :'Body',
    components : {
        Graph1:Graph1,
        Graph2:Graph2,
        Graph3:Graph3,
        Graph4:Graph4
    },

}
</script>

<style>

        
        @media all and (max-width: 768px) {
                body { background-color: red; }
                h1 { color: green; }
        }
        @media all and (min-width: 768px) and (max-width: 1024px) {
                body { background-color: black; }
                h1 { color: yellow; }
        }
        @media all and (min-width: 1025px) {
                body { background-color: blue; }
                h1 { color: white; }
        }
        @media all and (min-width: 1500px) {
                body { background-color: blue; }
                h1 { color: white; }
        }
        @media all and (min-width: 2000px) {
                body { background-color: blue; }
                h1 { color: red; }
        }
        @media all and (min-width: 2500px) {
                body { background-color: blue; }
                h1 { color: red; }
        }

  
    .menu_Top{background-color: red; height: 50px;width: 10px; }
    .blank{width:100px; height:500px; float:left;}


     .positionDiv{float: left; height: 280x; width: 230px; margin: 3px; background-color: #FAEBD7; border-radius: 5px;}

     .positionDiv_Top{float: left; height: 280px; width: 230px; margin: 3px; background-color: #FAEBD7; border-radius: 5px;}

    .menu{background-color:pink; width:15%; height:520px; float:left; margin-top:3px; margin-right: 3px;border-bottom-left-radius: 40px;border-Top-right-radius: 5px;border-Top-left-radius: 5px;border-bottom-right-radius: 5px}
    .Body_Set{margin-top :60px;}
</style>
