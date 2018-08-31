```stylus
.element
  /* Position */
  position absolute
  left 0
  top 0
  
  /* Display & Box model */
  display flex
  box-sizing border-box
  width 500px
  height 500px
  padding 5px
  margin 10px
  border 1px solid grey
  border-radius 5px
  justify-content center
  align-items center

  /* Text */
  font-size 16px
  line-height 20px
  font-weight bold
  
  /* Other */
  cursor pointer
  
  /* Color */
  color blue
  background white
```

> ```math
> x' =  x \cdot cos \theta - y \cdot sin \theta + xc
> ```

```js
function a() {

}
console.log(123)
```

### What is margin collapsing?
Margin collapsing, only for **top** and **bottom** margins, is a behavior that margins of **blocks** are collapsed(combined).
Normally, collapsed margin's size is the largest of margins being collapsed.
There're three cases:
1. Adjacent sibling

<iframe src="https://terry-su.github.io/BlogCDN/iframes/css/margin-collapsing/adajacent/index.html" ></iframe>


2. Parent and first/last child

<iframe src="https://terry-su.github.io/BlogCDN/iframes/css/margin-collapsing/parent-and-first-child/index.html" ></iframe>


3. Empty blocks

<iframe src="https://terry-su.github.io/BlogCDN/iframes/css/margin-collapsing/empty-block/index.html" ></iframe>



### Why margin collpasing?
But why does CSS have such a strange behavir?  

MDN says only that margins would be shared between boxes when margin collaspsing occurs:

>  When margin collapsing occurs, the margin area is not clearly defined since margins are shared between boxes.

But why should margins be shared? So I keep searching, and find a resonable explanation. 

Suppose that you had several paragraph(`<p/>`) to set vertical margins.

If margins didn't collapse, they worked like padding(only for positioning part), right? So, here you used padding to mock margin.   

If you set both `padding-top:10px;` and `padding-bottom:10px;` to paragraphs, you would find a problem: most gaps were `20px`, but the most top gap and the most bottom were `10px`.

What would happen if margins collapse? It turned out all gaps were `10px`.

From example above, margin collpasing does solve some common vertical margin problems and this can be reason why margin collpases.