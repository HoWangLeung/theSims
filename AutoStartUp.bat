start C:\Users\user\AppData\Local\Postman\Postman.exe

set ECLIPSE_HOME=C:\Users\user\eclipse\jee-2020-03\eclipse
set JAVA_HOME=C:\Program Files\Java\jdk1.8.0_271

start "eclipse" "%ECLIPSE_HOME%\eclipse.exe" -vm "%JAVA_HOME%\bin\javaw.exe" -data C:\Users\user\eclipse-workspace

cd "C:\Users\user\Desktop\Project\theSims\theSimsFrontend"
yarn start



 