var $jq = jQuery.noConflict();

$jq(':header').addClass('headline');
        
$jq('li:lt(3)').hide().fadeIn(1500);
        
$jq('li').on('click', function() {
    $jq(this).remove();
});