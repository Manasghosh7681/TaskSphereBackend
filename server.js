const app=require('./index')
const router=require('./Routes/OauthRoutes')
app.use('/api',router)
app.listen(process.env.PORT,()=>{console.log(`Server running on port ${process.env.PORT}`)})