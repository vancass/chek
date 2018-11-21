<template>
<div class="question">
  <div class="panel leftPanel">
    <div class="qns-title">
    </div>
    <div class="qns-text-wrapper">
      <img src="https://chekhov.withgoogle.com/alive/CDN_PATH/img/test/1.png"></img>
      <p class="qns-text">You had a holiday romance and your next step will be..</p>
    </div>
    <div class="progress-dots"></div>
  </div>


  <div class="panel rightPanel">
    <h2>Select Answer Below</h2>
    <div class="answers">
      <ul>
        <li class="answer">
          <span class="answer-num">A</span>
          <span class="answer-text">Just go for it and... forget about it afterwards.</span>
        </li>
        <li class="answer">
          <span class="answer-num">B</span>
          <span class="answer-text">Spend time together and just remember the sweet memory.</span>
        </li>
        <li class="answer">
          <span class="answer-num">C</span>
          <span class="answer-text">See where it leads, maybe it will work out for us.</span>
        </li>
        <li class="answer">
          <span class="answer-num">D</span>
          <span class="answer-text">Drop everything and dive into a new relationship. I am sure this is love!</span>
        </li>
      </ul>
    </div>
  </div>
  
</div>
</template>

<script>
export default {
  name: "Question"
};
</script>

<style scoped>
.question {
  display: flex;
  height: 100vh;
}

.panel {
  width: 50%;
  padding: 80px 70px;
}

.rightPanel {
  background-color: #4b96ae;
}

img {
  width: 100%;
}

.answer {
  padding: 0 10px 0 10px;
  align-items: center;
  display: flex;
  height: 140px;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  list-style-type: none;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  background-color: transparent;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0);
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-property: background-color, box-shadow, color;
}

.answer:hover {
  color: #000;
  background-color: #fff;
  transition-duration: 200ms;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
}

.answer:hover .answer-num {
  color: #fff;
  transform: scale3d(1, 1, 1) !important;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.4);
  background-color: #e91e63;
}

.answer-num {
  color: #4b96ae;
  background-color: #fff;
  border-radius: 1000px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.41);
  transform: scale3d(0.8, 0.8, 0.8);
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.15, 0.51, 0.29, 1);
  transition-property: background-color, box-shadow, color, transform;
}
.answer-text {
  margin-left: 15px;
  text-align: left;
}
</style>
