     const drawRect = (ctx, x, y, w, h, options) => {
          Object.assign(ctx, options)
          ctx.beginPath();
          ctx.rect(x, y, w, h);
          ctx.closePath();
          ctx.fill();
     }
