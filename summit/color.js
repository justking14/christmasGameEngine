class ColorTransition {
     constructor(startHue, startSaturation, startLightness, endHue, endSaturation, endLightness, duration, steps) {
          this.startHue = startHue;
          this.startSaturation = startSaturation;
          this.startLightness = startLightness;
          this.endHue = endHue;
          this.endSaturation = endSaturation;
          this.endLightness = endLightness;
          this.duration = duration;
          this.steps = steps;
          this.step = 0;
          this.interval = null;
     }

     start() {
          // Calculate the HSL values for each step of the animation
          const hStep = (this.endHue - this.startHue) / this.steps;
          const sStep = (this.endSaturation - this.startSaturation) / this.steps;
          const lStep = (this.endLightness - this.startLightness) / this.steps;

          let h = this.startHue;
          let s = this.startSaturation;
          let l = this.startLightness;

          // Update the color with each step of the animation
          this.interval = setInterval(() => {
               // Calculate the current color
               h += hStep;
               s += sStep;
               l += lStep;
               const color = `hsl(${Math.floor(h)}, ${Math.floor(s)}%, ${Math.floor(l)}%)`;

               // Update the UI with the current color
               // For example, set the background color of a div element:
               document.querySelector(".my-div").style.backgroundColor = color;

               this.step++;

               // Stop the animation after the specified duration
               if (this.step >= this.steps) {
                    clearInterval(this.interval);
                    this.interval = null;
                    this.step = 0;
               }
          }, this.duration / this.steps);
     }
}

class colorHSL {
     constructor(H, S, L) {
          this.H = H;
          this.S = S;
          this.L = L;
     }
     setColorFromArray(arr) {
          //console.log(arr)
          this.H = arr[0]
          this.S = arr[1]
          this.L = arr[2]
     }
     getArray() {
          return [this.H, this.S, this.L]
     }
     returnColor() {
          
          let str = `hsl(${Math.floor(this.H)}, ${Math.floor(this.S)}%, ${Math.floor(this.L)}%)`;
          //console.log(this.H)
          return str
     }
     hslToRgb() {
          let r, g, b;
          if(s == 0){
               r = g = b = l; // achromatic
          }else{
               var hue2rgb = function hue2rgb(p, q, t){
                    if(t < 0) t += 1;
                    if(t > 1) t -= 1;
                    if(t < 1/6) return p + (q - p) * 6 * t;
                    if(t < 1/2) return q;
                    if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                    return p;
               }

               var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
               var p = 2 * l - q;
               r = hue2rgb(p, q, h + 1/3);
               g = hue2rgb(p, q, h);
               b = hue2rgb(p, q, h - 1/3);
          }

          return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
          /*
          let h = this.H/360;
          let l = this.L
          let s = this.S;
          const c = (1 - Math.abs(2 * l - 1)) * s;
          const x = c * (1 - Math.abs((h / 60) % 2 - 1));
          const m = l - c / 2;
          let r, g, b;

          if (h < 60) {
               [r, g, b] = [c, x, 0];
          } else if (h < 120) {
               [r, g, b] = [x, c, 0];
          } else if (h < 180) {
               [r, g, b] = [0, c, x];
          } else if (h < 240) {
               [r, g, b] = [0, x, c];
          } else if (h < 300) {
               [r, g, b] = [x, 0, c];
          } else {
               [r, g, b] = [c, 0, x];
          }

          return [(r + m) * 255, (g + m) * 255, (b + m) * 255];
          */
     }
}


class colorRGB {
     constructor(r, g, b) {
          this.r = r;
          this.g = g;
          this.b = b;
     }
     setColorFromArray(arr) {
          this.r = arr[0]
          this.g = arr[1]
          this.b = arr[2]
     }
     returnColor() {
          return `rgb(${Math.floor(this.r)}, ${Math.floor(this.g)}, ${Math.floor(this.b)})`;
     }
     rgbToHsl() {
          let r = this.r/255;
          let g = this.g/255;
          let b = this.b/255;

          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          let h, s, l = (max + min) / 2;

          if (max === min) {
               h = s = 0; // achromatic
          } else {
               const d = max - min;
               s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

               switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
               }

               h *= 60;
          }

          return [h, s, l];
     }
}



/**
 * TODO - refactor this as a (jQuery?) plugin!


// Converts a #ffffff hex string into an [r,g,b] array
var h2r = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
};

// Inverse of the above
var r2h = function(rgb) {
    return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
};

// Interpolates two [r,g,b] colors and returns an [r,g,b] of the result
// Taken from the awesome ROT.js roguelike dev library at
// https://github.com/ondras/rot.js
var _interpolateColor = function(color1, color2, factor) {
  if (arguments.length < 3) { factor = 0.5; }
  var result = color1.slice();
  for (var i=0;i<3;i++) {
    result[i] = Math.round(result[i] + factor*(color2[i]-color1[i]));
  }
  return result;
};

var rgb2hsl = function(color) {
  var r = color[0]/255;
  var g = color[1]/255;
  var b = color[2]/255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = (l > 0.5 ? d / (2 - max - min) : d / (max + min));
    switch(max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h, s, l];
};

var hsl2rgb = function(color) {
  var l = color[2];

  if (color[1] == 0) {
    l = Math.round(l*255);
    return [l, l, l];
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }

    var s = color[1];
    var q = (l < 0.5 ? l * (1 + s) : l + s - l * s);
    var p = 2 * l - q;
    var r = hue2rgb(p, q, color[0] + 1/3);
    var g = hue2rgb(p, q, color[0]);
    var b = hue2rgb(p, q, color[0] - 1/3);
    return [Math.round(r*255), Math.round(g*255), Math.round(b*255)];
  }
};

var _interpolateHSL = function(color1, color2, factor) {
  if (arguments.length < 3) { factor = 0.5; }
  var hsl1 = rgb2hsl(color1);
  var hsl2 = rgb2hsl(color2);
  for (var i=0;i<3;i++) {
    hsl1[i] += factor*(hsl2[i]-hsl1[i]);
  }
  return hsl2rgb(hsl1);
};


(function($) {
  
  var $list = $('#list'),
      $start = $('#start'),
      $end = $('#end'),
      $intype = $('input[name="intype"]'),
      $usehex = $('#usehex');

  // Add li elements between the start and end ones
  var _createSteps = function(numSteps) {
    $list.find('li.interim').remove();

    for(var i = 0; i < numSteps; i++) {
      $end.before('<li class="interim"><span></span></li>');
    }
  };

  // Color each li by interpolating between the start and end colors
  var _styleSteps = function() {
    var $items = $('li'),
        scol = h2r($start.find('input').val()),
        ecol = h2r($end.find('input').val());
    var fn = '_' + $('input[name="intype"]:checked').val();
    
    console.log('fn', fn);

    var factorStep = 1 / ($items.length - 1);
    $items.each(function(idx) {
      var icol = window[fn](scol, ecol, factorStep * idx),
          hcol = r2h(icol);

      $(this).css('background-color', hcol);
      $(this).find('span').text(hcol);
    });

  }

  // Re-render on change
  $('#usehex').on('change', function() {
    var ct = $('ul input').eq(0).attr('type');
    var scol = $start.find('input').val(),
        ecol = $end.find('input').val();
    
    $('ul input').attr('type', (ct == 'color') ? 'text' : 'color');
    
    $start.find('input').val(scol);
    $end.find('input').val(ecol);
  });
  $('input').not('#usehex').on('change', _styleSteps);
  $('#numsteps').on('change', function() {
    _createSteps($(this).val());
    _styleSteps();
  }).trigger('change');
  
})(jQuery);

*/