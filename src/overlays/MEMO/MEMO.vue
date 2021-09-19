<script>
import { Overlay } from 'trading-vue-js'

export default {
  name: 'MEMO',
  mixins: [Overlay],
  mounted(){
    },
  methods: {
    draw(ctx) {
      // console.log('再描画をおこないます')
      // console.log(this.$store.state.current_ts)
      const layout = this.$props.layout
      const height = this.arrow_height;
      const width = this.arrow_width;
      let yOffset = this.y_offset;
      ctx.lineWidth = 1.5
      // console.log(JSON.stringify(this.$store.state.MEMO.onchart[0].data))
      // console.log('aa')
      // console.log('!!!!!!!'+this.$props.values)
      for(let i in this.$store.state.MEMO.onchart[0].data){
        // console.log(JSON.stringify(i))
      }
      // console.log(JSON.stringify(this.$store.state.MEMO.onchart[0].data[4]))
      // console.log(JSON.stringify(this.$store.state.MEMO.onchart[0].data[5]))
        // console.log('aa')
      // console.log(JSON.stringify(this.$props.data))
      // console.log(JSON.stringify(this.$store.state.MEMO))
      // for (var i in this.$props.data) {
      for (var i in this.$store.state.MEMO.onchart[0].data) {
        // const [ts, direction, yCoord] = this.$props.data[i];
        const [ts, direction, yCoord] = this.$store.state.MEMO.onchart[0].data[i];
        const color = this.buy_color;
        ctx.fillStyle = color;
        // ctx.strokeStyle = ctx.fillStyle;
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.beginPath();
        let x = layout.t2screen(ts);
        let y = layout.$2screen(yCoord) - 100;
        const halfSize = width / 2;

        // if (pos === 'above') {
          yOffset *= -1;

          // Top left point
          ctx.moveTo(x, 0);
          // Top right point
          ctx.lineTo(x, 1200);
          // Bottom middle point
          ctx.lineTo(x+2, 1200);
          ctx.lineTo(x+2,0);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
          // ctx.fillText(direction, x, y + yOffset - 10);
        // }

        // if (pos === 'below') {
        //   yOffset = Math.abs(yOffset);

        //   // Top left point
        //   ctx.moveTo(x - halfSize, y + yOffset + height);
        //   // Top right point
        //   ctx.lineTo(x + halfSize, y + yOffset + height);
        //   // Bottom middle point
        //   ctx.lineTo(x, y + yOffset);
        //   ctx.closePath();
        //   ctx.stroke();
        //   ctx.fill();
        //   ctx.fillText(direction, x, y + yOffset - 10);
        // }

      }
    },
    use_for() {
      return ['MEMO']
      // return ['MEMO','ORDER']
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
      return this.sett['buyColor'] || '#fff' // default value
    },
    sell_color() {
      return this.sett['sellColor'] || '#fff'
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