//js cookbook/scripts/build.js



load("steal/rhino/rhino.js");

print(steal.config('root')+"");

steal('steal/build/apps',function(){
	steal.build.apps(
		[
		'contacts/contacts.js',
		'tasks/tasks.js',
	],
		{depth: 2});
	
});
