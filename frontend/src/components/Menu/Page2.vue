<template>
   


    <div class="parent">
        <div class="container">
            <div class="content">
                <div class="half">
                    <div class="contents">
                        
                    </div>
                </div>
                <div class="half">
                    <div class="contents">
                        
                    </div>
                </div>
                <div class="half">
                    <div class="contents">
                        
                    </div>
                </div>
                <div class="half">
                    <div class="contents">
                        
                    </div>
                </div>
                <div class="half">
                    <div class="contents">
                       
                    </div>
                </div>
                <div class="half">
                    <div class="contents">
                       
                    </div>
                </div>
                <div class="half">
                    <div class="contents">
                     
                    </div>
                </div>
                <div class="half">
                    <div class="contents">
                      
                    </div>
                </div>
                <div class="half">
                    <div class="contents">
                       
                    </div>
                </div>
                <div class="half">
                    <div class="contents">
                       
                    </div>
                </div>
                <div class="half">
                    <div class="contents">
                      
                    </div>
                </div>
                <div class="half">
                    <div class="contents">
                       
                    </div>
                </div>
                <div class="half">
                    <div class="contents">
                        
                    </div>
                </div>
            </div>


       


        </div>
    </div>

  
</template>

<script>
export default {
    name:"page2"
}
</script>

<style scoped>
    html {
    height: 100%;
}

body {
    padding: 0;
    margin: 0;
    height: 100%;
}

p {
    padding: 0;
    margin: 0;
}

.header {
    position: relative;
    height: 100px;
    background: rgb(136, 255, 0);
}

.parent {
    min-height: 100%;
    max-width: 980px;
    margin: 0 auto;
    margin-top: -200px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
}

.parent::after {
    content: "";
    display: block;
    clear: both;
}

.content::after {
    content: "";
    display: block;
    clear: both;
}


/* .container {
    float: left;
    width: 80%;
} */

.content {
    min-height: 100%;
    margin: 0 auto;
    padding: 200px 40px 0;
}

.right {
    padding: 10px;
    text-align: center;
}

.half {
    width: 50%;
    float: left;
}

.contents {
    border: 1px solid #eee;
    margin: 10px;
    padding: 10px;
    height: 300px;
}

.footer {
    height: 100px;
    background: rgb(51, 146, 255);
}

.ly_popup {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.layer {
    position: absolute;
    width: 200px;
    height: 280px;
    background: #9ff;
    top: 50%;
    left: 50%;
    margin: -140px 0 0 -100px;
}
</style>
