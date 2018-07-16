$('.tabsList').on('click', '.tabLi', function() {
    console.log($(this).index());
    $('.contentTab.active').removeClass('active');
    var id = $(this).index();
    $('.contentTab:eq('+id+')').addClass('active');
})
var cityList = '<option>Выберите город</option>';

$.ajax({
	url:'city.json',
	dataType: 'json',
	success: function (data) {
		//console.log(data);
		$.each(data, function() {
			cityList+='<option value="'+this+'">'+this+'</option>';
			$('select').html(cityList);
		})
	},
	error: function (err) {
		console.error('ошибка');
	}
});