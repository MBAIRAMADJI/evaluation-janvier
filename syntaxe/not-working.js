//Créer un module React:

class App extends React.Component {
		render() {
			return (
					<div>Hello World!</div>
				)
		}
}

export default App;

//Créer un loader Webpack


module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test : /\.scss|css$/,
        loaders : ["style-loader", "css-loader", "sass-loader"]
      }
     
    ]
  }

 //Créer une task Gulp


 gulp.task('uglify', function() {

 	gulp.src('./*.js')
 		.pipe(uglify())
 		.pipe(gulp.dest('dist'))

 });
