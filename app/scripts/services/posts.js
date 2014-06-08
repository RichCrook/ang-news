app.factory('Post', function($resource){
    return $resource('https://luminous-fire-2026.firebaseio.com/posts/:id.json');
})