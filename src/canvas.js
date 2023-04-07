

//drawCircle(this.ctx, Pointer.pos.x, Pointer.pos.y, 10, 0, Math.PI * 2 , {fillStyle: "red"})
export const drawCircle = (ctx, x, y, r, a1, a2, options) => {
     Object.assign(ctx, options)
     ctx.beginPath()
     ctx.arc(x, y, r, a1, a2, true)
     ctx.closePath()
     ctx.fill()
}

//drawRect(this.ctx, 0, 0, window.innerWidth, window.innerHeight, {fillStyle: "white"})
export const drawRect = (ctx, x, y, w, h, options) => {
     Object.assign(ctx, options)
     ctx.beginPath();
     ctx.rect(x, y, w, h);
     ctx.closePath();
     ctx.fill();
}

export const strokeRect = (ctx, x, y, w, h, options) => {
     Object.assign(ctx, options)
     ctx.beginPath();
     ctx.rect(x, y, w, h);
     ctx.closePath();
     ctx.stroke();
}

export const drawProgressBar = (ctx, fraction, x, y, w, h, baseColor, barColor1, barColor2) => {
     //background square
     drawRect(ctx, x, y, w, h, { fillStyle: baseColor })
     
     let barWidth = Math.max(w, fraction * w)
     drawRect(ctx, x, y, barWidth, h, { fillStyle: barColor1 })//progress bar
     strokeRect(ctx, x, y, barWidth, h, { strokeStyle: barColor2, lineWidth: 1 })
}

export const drawImage = (ctx, image, x, y) => {
     ctx.drawImage(image,x,y)
}
export const drawImageFrame = (ctx, image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) => {
     ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
}
