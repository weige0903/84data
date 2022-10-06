$(function() {
  $.get('https://spreadsheets.google.com/feeds/list/2PACX-1vThYZxBfq8M9KhtIwOsXSbwITCeqNdLHmc_IaSFQGWyloSYbfoJtER718_7a62UK1KvHrM_jyj8rFCH/1/public/values?alt=json', function(data) {
    console.log(data);
  });
});