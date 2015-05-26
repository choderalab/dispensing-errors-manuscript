(function($) {

	$(document).ready(function(){
		
		if ( 'undefined' != typeof( popularPosts ) ) {

			$('body').delegate('.bookmarking-popup a', 'click', function(e){
				e.preventDefault();
				
				var href = $(this).attr('href');
	
				var a = $(this).parents('ul[id^="wpn-share-post-"]');
				var id = $(a[0]).attr('id').substring(15);
				
				$.post(
					popularPosts.address + popularPosts.ajaxurl,
					{
						action: 'add-share-count',
						post_id: id,
						type: $(this).parent().attr('class'),
						nonce: popularPosts.nonce
					},
					function(response){
						window.location.href = href;
					}
				);
			});

			if( ( 0 != popularPosts.post_id ) && ( 'true' != com.nature.StaffBlogs.getParamsArray()['preview'] ) ){
				$.post(
					popularPosts.address + popularPosts.ajaxurl,
					{
						action: 'add-read-count',
						post_id: popularPosts.post_id,
						nonce: popularPosts.nonce
					}	
				);
			}

		}
	
	});

})(wpjq);
