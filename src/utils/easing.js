
//lerping 
//P(t) = A + t * (B-A)   
//A is starting point, B is end point.  T is time percentage
//linear: P(t) = t
//smooth start: P(t) = t * t, speeds up over time.  
//    slower start and faster end as more * t's are added
//smooth stop: P(t) = 1 - (1-x)^2
//   faster start and slower end as more ^2 are added, 1 - (1-x)^N
//mix smoothstart2.2 = mix(smoothstart2, smoothstart3,0.2)
//   a + weightB(b - a) or smoothStart2 + 0.2*(smoothStart3 - smoothStart2)
//crossFade: like mix but uses t as the mix weight
//   a + t*(b-a)
//scale: multiple by t, 0-1 * 0-1 
//Arch2(t) = t * (1-t)
//   goes from 0 to 1 to 0
//   smoothStartArch2 = t^2 * (1-t)
//        smooth rise to 1 before a quick dart back to 0
//   smoothStopArch3 = t * (1-t)^2
//        //quick rise to 1 before a slow  descent back to 0
//bounceClampBottom: returns abs(val) which bounces off the bottom 
//bounceClampTop: returns 1 - abs(1 - t), bounces off the top

export const linearEase = (start, end, t) =>{
     return start + t * (end - start)     
}
export const smoothStart = (A, B, t, N = 2) => {
     return linearEase(A, B, t^N)
}
export const smoothStop = (A, B, t, N = 2) => {
     return linearEase(A, B, 1 - (1 - t)^N)
}
//A and B are two eases to mix together 
export const mix = (A, B, d) => { return A + d * (B - A)}
//like mix but uses t as the mix weight 
export const crossFade = (A,B,t) => {return A + d * (B - A)}

export const archEase = (A, B, t) => {
     return linearEase(A, B, t * (1-t))//goes from 0 to 1 to 0
}
export const archSmoothStart = (A, B, t, N=2) => {
     return linearEase(A,B, (1 - t) * t^N ) //smooth rise to 1 before a quick dart back to 0
}
export const archSmoothStop = (A, B, t, N=2) => {
     return linearEase(A, B, t * (1 - t) ^ N) //quick rise to 1 before a slow  descent back to 0
}

export const bounceClampBottom = (t) => {
     return Math.abs(t)
}
export const bounceClampTop = (t) => {
     return 1 - Math.abs(1 - t)
}