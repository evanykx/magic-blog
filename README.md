# magic-blog
Personal blog demo which is based on
- Typescript
- Koa
- Mongodb
- Vue
- Vue-Router
- Vuex
- Element-UI

## backstage
This project is just an empty scaffold. I haven't add any implemented services in it, 
so if it's helpful to you, you can 'git clone' it, and rewrite it as whatever you want.

1. Install dependencies
```cmd
  > cd backstage
  > yarn
```
2. Build, this command will copy resource files and compile ts files into the 'build' folder. For copy configuration, you can config it in the gruntfile.js. Cause this compiler is 'grunt',  so when you run this command, it will watch the src folder, compile automatically when you save source files, so don't close this command window.
```cmd
  > yarn run build
```
3. Dev, this command will start a http server from the compiled files in the directory of 'build/src'. And the nodemon module will watch this folder, when files in it  changes, this server will automatically refresh. Coordination of grunt, this makes you write source on a hot-server. Let's do it. Start a new command window and run 
```cmd
  > yarn run dev
```

## webapp
This project is just a practise demo for how to use a font-end framework. This is not a complete project, cause only 2 pages had been done. You can clone it and try it.
1. Install dependencies
```cmd
  > cd webapp
  > yarn
```
2. Start, start the serve, it will runs on port 8080
```cmd
  > yarn serve
```
3. Some screenshots https://github.com/evanykx/image-resources
- ![index page]("https://github.com/evanykx/image-resources/raw/master/magic-blog-index-page.png")
- ![home page en]("https://github.com/evanykx/image-resources/raw/master/magic-blog-home-en.png")
- ![home page zh]("https://github.com/evanykx/image-resources/raw/master/magic-blog-home-zh.png")
- ![home page ja]("https://github.com/evanykx/image-resources/raw/master/magic-blog-home-ja.png")
- ![album page]("https://github.com/evanykx/image-resources/raw/master/magic-blog-album.png")
- ![photo preview page]("https://github.com/evanykx/raw/master/image-resources/magic-blog-photo.png")
- ![video list page]("https://github.com/evanykx/raw/master/image-resources/magic-blog-video-list.png")
- ![video play page]("https://github.com/evanykx/image-resources/raw/master/magic-blog-video.png")
