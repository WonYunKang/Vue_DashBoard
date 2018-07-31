<template>
    <div>
        <div class="blank"></div>
            <div class="menu">
        <div class="menu_Top"></div> 
                
          <div style="float: clear">  <h4>Menu</h4></div>
        
                <P><router-link to="page1">Page1</router-link></P>
                <P><router-link to="page2">Page2</router-link></P>
                <P><router-link to="page3">Page3</router-link></P>
                <P><router-link to="page4">Page4</router-link></P>

        </div>
        

            <div style="background-color:#50C2FF" class="positionDiv">
                <br><br>
                <h5>EDUCATION</h5>
                <p>Talented people are the source of innovation. Tracking measures of human capital helps gauge the availability of a skilled workforce, particularly in important technical fields.</p>
            </div>
            <div style="background-color:#96C7ED" class="positionDiv">
                <br><br>
                <h5>DEVELOPMENT</h5>
                <p>Investment in Research and Development (R&D) is critical for the accumulation of knowledge and developing new products and services that will drive regional growth and prosperity.</p>
            </div>
            <div style="background-color:#64CD3C" class="positionDiv">
                <br><br>
                <h5>ENTREPRENEURSHIP</h5>
                <p>Entrepreneurial capacity determines Hawaii’s ability to generate new business activities through the development of new ideas and innovation.</p>
            </div>
            <div style="background-color:#FF8200" class="positionDiv">
                <br> <br>
                <h5>PROSPERITY</h5>
                <p>If innovation is the key to long run economic growth, a key outcome is higher living standards and economic prosperity. Hawaii growth has fallen behind the nation since the 1990s.</p>

            </div>
            <div class="positionDiv"></div>
            <div class="positionDiv"></div>   
            <div class="positionDiv"></div>
            <div class="positionDiv"></div>

    </div>    
</template>

<script>
export default {

}
</script>

<style>
.menu_Top{background-color: red; height: 50px;width: 10px; }
.blank{width:100px; height:1000px; float:left;}
    .positionDiv{float: left; height: 280px; width: 230px; margin: 3px; background-color: #FAEBD7; border-radius: 5px;}
    .menu{background-color:pink; width:15%; height:520px; float:left; margin-top:3px; margin-right: 3px;border-bottom-left-radius: 40px;border-Top-right-radius: 5px;border-Top-left-radius: 5px;border-bottom-right-radius: 5px}
</style>
