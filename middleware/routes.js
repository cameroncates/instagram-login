export default function({store, route, redirect }) {
    // const blockedRoute = /\/signup\/*/g
    
    const authRoutes = [/^\/login\/[a-z]/i, /^\/register\/[0-9a-zA-Z]/i],
        dashboardRoutes = [/^\/dashboard\/[0-9a-zA-Z]/i]
    let invalid = true
  
}