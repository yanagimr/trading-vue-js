<template>
  <div>
  </div>
</template>

<script>
import { Overlay } from 'trading-vue-js'

export default {
  name: 'ORDER',
  mixins: [Overlay],
  methods: {
    draw(ctx) {
      const layout = this.$props.layout
      const height = this.arrow_height;
      const width = this.arrow_width;
      let yOffset = this.y_offset;
      ctx.lineWidth = 1.5

      for (var i in this.$props.data) {
        const [ts, direction, yCoord, pos, shape] = this.$props.data[i];


        const color = direction === 'buy' ? this.buy_color : this.sell_color;
        ctx.fillStyle = color;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.beginPath();
        let x = layout.t2screen(ts);
        let y = layout.$2screen(yCoord);
        const halfSize = width / 2;

        if (pos === 'above') {
          yOffset *= -1;

          // Top left point
          ctx.moveTo(x - halfSize, y + yOffset);
          // Top right point
          ctx.lineTo(x + halfSize, y + yOffset);
          // Bottom middle point
          ctx.lineTo(x, y + yOffset + height);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
          ctx.fillText(direction, x, y + yOffset - 10);
        }

        if (pos === 'below') {
          yOffset = Math.abs(yOffset);

          // Top left point
          ctx.moveTo(x - halfSize, y + yOffset + height);
          // Top right point
          ctx.lineTo(x + halfSize, y + yOffset + height);
          // Bottom middle point
          ctx.lineTo(x, y + yOffset);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
          ctx.fillText(direction, x, y + yOffset - 10);
        }
      }
    },
    use_for() {
      return ['Order']
    },
    meta_info() {
      return {
        author: 'trading_peter',
        version: '1.0.0',
      }
    },
  },
  // Define internal setting & constants here
  computed: {
    sett() { // Just an alias
      return this.$props.settings
    },
    buy_color() {
      return this.sett['buyColor'] || '#bfff00' // default value
    },
    sell_color() {
      return this.sett['sellColor'] || '#ec4662'
    },
    arrow_width() {
      return this.sett['arrowWidth'] || 15
    },
    show_label() {
      return this.sett['showLabel'] !== false
    },
    y_offset() {
      return this.sett['yOffset'] || 20
    },
    arrow_height() {
      return this.sett['arrowHeight'] || 10
    }
  }
}
</script>