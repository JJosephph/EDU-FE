<template>
  <div class="article-container">
    <div class="article-header">
      <h1>{{ article.title }}</h1>
      <p>{{ article.date }}</p>
    </div>
    <div class="article-body" v-html="article.content"></div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      article: {
        title: "在线教育网站智库",
        date: "2021-01-01",
        content: "<p>随着科技的不断发展，在线教育已成为了一个越来越普遍的现象。无论是在学校还是在职业生涯中，人们都可以通过在线教育获得知识和技能。在线教育可以让学生在任何地方和时间内学习，更加灵活和方便，并且可以节省交通和住宿的费用。本文将从在线教育的优点、挑战和未来发展等方面进行探讨。</p><p>一、在线教育的优点1. 更加灵活的学习方式在线教育可以让学生随时随地学习，无论是在公共交通工具上还是在家里。这种灵活性意味着学生可以自由安排时间表，避免与个人或家庭事务冲突。因此，学生可以更好地平衡工作与学习的关系，提高学业成绩和职业技能。2. 节省时间和资源在传统教育中，学生需要花费大量时间和精力在交通和住宿上，这会增加学习成本和时间成本。现在，通过在线学习，学生可以在家里、咖啡厅和图书馆等地学习，无需耗费时间和金钱去到校园。这样能够让学生更加高效地利用时间和资源，集中精力在学习上。3. 可自定义的学习体验每个学生都有其独特的学习方式和时间表，而在线教育能够满足这种需求。学生可以根据自己喜好的节奏学习，而不必受到教师的时间安排限制。值得一提的是，学生还可以选择想要的课程，在某些情况下，学生可以比传统教育更快地完成自己的学业。</p>",
      },
    };
  },
  methods: {
    getCurrentTime() {
      return new Date().toLocaleString();
    },
  },
};
</script>

<style scoped>
.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.article-header {
  text-align: center;
  margin-bottom: 20px;
}

.article-header h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

.article-header p {
  font-size: 16px;
  color: #666;
}

.article-body {
  line-height: 1.8;
  font-size: 18px;
  color: #333;
}
</style>