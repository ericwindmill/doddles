<template>
  <div class='TipsPage'>
    <dl class='Tips'>
      <dt>1. Come prepared with questions!</dt>
      <dd>
        <p>
          You <em>know</em> they're going to ask if you have any questions for them. 
          This is a chance to show off that you've <strong>researched the company, are actually interested in the company, and you're a thoughtful human being.</strong>
          You can even use this to feighn some experience.
        </p>
        <p> Here's my go to list of questions: </p>
        <dl>
          <dt>Technical Questions</dt>
          <dd><ul>
            <li>What is the biggest challenge you’re facing in the engineering dept?</li>
            <li>What do you think you’ll be working on in a year?</li>
            <li>What’s your stack?</li>
            <li>What’s the engineer do from day to day?</li>
            <li>What kind of testing do you do?</li>
            <li>Do you use version control?</li>
          </ul></dd>
          <dt>General Questions</dt>
          <dd><ul>
            <li>What do you think are the most important qualities for someone to excel in this role?</li>
            <li>What are your expectations for this role during the first 30 days, 60 days, year?</li>
            <li>Where do you think the company is headed in the next 5 years?</li>
            <li>(If its a startup): How confident are you in the future? Whats your plan for monetization</li>
            <li>Who do you consider your top competitor, and why?</li>
            <li>What about my resume do you have doubts about? (This is the golden chance to clear up any doubts if you're a new dev).</li>
            <li>Can you tell me about the work environment/compnay culture?</li>
          </ul></dd>
        </dl>
          <p> 
            I would come prepared with 2-3 simple technical questions to show that you're expreienced.
            The general questions are perhaps more important, though. They show what kind of person you are. 
            Companies know that they can teach skills, but they can't teach personality and attitude.
          </p>
      </dd>
      <dt>2. Don't be afraid to say 'I don't know.'</dt>
      <dd>
        <p> 
          As with the eventual onsite, many of the questions you'll hear in phone screens aren't about right and wrong. 
          They're about showing your thought process. (Obviously, being correct is best.)
          If you're asked about how you would solve a specific problem, and you don't know, say this exact thing:
          <strong>"I don't know, but my best educated guess is..."</strong>
          This shows two things: One, evne though you don't know the answer, you aren't completely ignorant.
          And two, you aren't too proud to be wrong. This is a powerful trait for any job.
          The interviewer will know if you're BSing your way through, and then you're dead before you began. Just don't do it.
        </p>
      </dd>
      <dt>3. Get your story straight</dt>
      <dd>
        This is going to come up in every interview, ever: 'Tell me about yourself'. 

       <p> I get this in technical interviews, non-technical interviews, and in every industry I've ever worked. 
        You'll get it with clients if you're freelanceing, and at companies.
        They don't really care where your from or how tall you are or what your hobbies are.
        <strong>They care about what led you to this phone call.</strong></p>
        <ul>
          <li>How did you learn to program?</li>
          <li>Where have you worked up to this point?</li>
          <li>If you're switching careers, why?</li>
          <li>What are your skills? </li>
          <li>What projects have you built?</li>
          <li>What have you built?</li>
        </ul>
        <p>This is your chance to ease the interviewers mind about two things:</p>
          <ol>
            <li>That you're a passionate, interested engineer.</li>
            <li>That regardless of your resume, they <em>should</em> be talking to you.</li>
          </ol>
        <p>This is essentially your origin story as it relates to programmimg. My origin story, for example, starts out with me learning to program via wordpress. 
          It has nothing to do with college or previous jobs, and that's okay.
        </p>
      </dd>
      <dt>4. When asked a question you do know about, go deep.</dt>
      <dd>
        <p> By 'go deep', I mean ramble. Say as much as you can about a topic. Show that your knwledge isn't just surface level, but that you actually understand what's happening. This is a great chance to spend time talking about what you actually know about. If you're giving short (even corrct) answers, you're allowing yourself more room for error. An interview can ask a question a minute if you aren't going deep, or far less if you are.</p><br>
        <p>Here's an example: 
          <p><strong> What are some of the features of ES2015? </strong></p></p>
        <p>One of the biggest features is the ability to write <em>classes</em>. Previously, inheritance in JavaScript was only available via prototypes. Now, you can write classes as you would be able to in many other languages, such as Ruby. [side concept one:] While classes are simply a wrapper for the prototypal inheritance, they do function a bit differently, and allow you to think about your logic differently. (Go into the differences between prototypal inheritance and classical in JS...)  [side concept two:] Classes aren't widely used in JS yet, but they are a core part of modern React. (Go into how classes are used in React...). </p><br>
        <p> In the above example, you've proven that you know all there is to know about Classes in JS, PLUS shown that you're competent with React, prorotypal inheritance, and general classical inheritance knowledge. If you do that for arrow functions and 2-3 other features of ES6, you've crushed that question and used 5-10 minutes of time. It's a win-win for you and the interviewer.</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.TipsPage {
  padding: 20px 50px;
}

.Tips > dt {
  font-size: 1.4em;
  font-weight: 500;
  padding-bottom: 10px;
}

.Tips > dd {
  margin-bottom: 30px;
}
  
</style>
