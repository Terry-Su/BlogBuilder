 <div class="mermaid">
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
  </div>



```
graph TB
开始--> IF1{计时器是否为空}
IF1 --> |是| B(执行搜索)
B--> C(添加计时器: 过了 等待时长 后, 清除计时器)


IF1 --> |否|D(清除计时器)
D--> C

C--> 结束
```
123
After reviewing CSS systematically,I've found some interesting CSS topics deserved to be wrote down:123

* Using only percentage to draw a square
* Specificity-1000 100 10 1
* Properties Inheritable or Not
* Margin collapsing
* Align self
* Box sizing 
* Auto



# Using only percentage to draw a square
Drawing a square by pixel is nothing hard, but have you tried using percentage to draw a square? As you know, browser's default width and height are not same, so using `width: 10%; height: 10%;` cannot draw a square definitely. You can get the answer only if you have mastered enough CSS basis:
> The size of the `margin` and `padding` as a percentage, relative to the **width** of the containing block.

It amazed me when I found this rule first. Why there's only width? Where's height? Strange but interesting thing. So, there're one more answers:

1. `width: 0; height: 0; padding: 5%;`

2. `width: 10%; height: 0; padding: 5% 0;`

<iframe src="https://terry-su.github.io/BlogCDN/iframes/css/using-percentage-to-draw-square/index.html?mode=css" ></iframe>



# Specificity
CSS(Cascading Style Sheets) determines the style of dom, and the specificity of a selector determines whether its style,instead of other selectors' styles, can be attached on dom. Specificities of different selectors are listed on following table.

Selector | Specificity
---|---
`style` attribute of a html tag  | Thousand(1000)
Id | Hundread(100)
Class | Ten(10)
Dom element or pseudo-element | one(1)

You can find specifities' numbers from top to bottom are: 1000, 100, 10, 10. This number sequence is really easy enough to be remembered. And selectors' order, as commonly used in daily development, can be accepted by us naturally.  
Therefore, it's convenient if you'd like to calcuate a selector's specifiy, just use the formula: `m * 1000 + n * 100 + p * 10 + q * 1`



# Properties Inheritable or Not
Someone who has  written countless rows of CSS codes must have found that CSS properties: `color` and `font-size` can be inherited but  `width` and `height` cannot. Why? Maybe writing repeating proproties does make no sense.
Thank people on stackoverflow, you can find all CSS properties inheritatble or not on [this list](https://www.w3.org/TR/CSS21/propidx.html). 




# Margin(Top and Bottom) collapsing
Margin collapsing, only for **top** and **bottom** margins, is a strange behavior that margins of **blocks** are collapsed(combined). There's my [another article](/blogs/details/margin-collapsing-in-css.html) talking about margin collpasing specifically.  
And normally, collapsed margin's size is the largest of margins being collapsed.

<iframe src="https://terry-su.github.io/BlogCDN/iframes/css/margin-collapsing/parent-and-first-child/index.html?mode=css" ></iframe>


# Align self
If you are familiar with `flex`, you must often set `align-items: center;` on flexbox container to align chilren vertical items center. However, how about setting properties directly on children items to align themselves? Property `align-self` can help it.

<iframe src="https://terry-su.github.io/BlogCDN/iframes/css/flex/align-self/index.html?mode=css" ></iframe>

# Box-sizing
Once upon a time, I was someone who didn't know this property and who had been struggling for some basis CSS layouts. Main difference between two types is whether width and height have fixed values.   
`content-box` is default type, which means width and height are fixed and padding, border, margin are outside of content.   

![content-box](https://terry-su.github.io/BlogCDN/images/box-model-box-sizing-content-box.png)

Likewise, `border-box` means width and height are not fixed, being expanded by inner padding  and border with margin still outside.  

![border-box](https://terry-su.github.io/BlogCDN/images/box-model-box-sizing-border-box.png)


# Auto
CSS property value `auto` would justify some elements properties automatically.Two commonly used situations are:
### 1. `margin: 0 auto;` for blocks  
For blocks, centering content can be convenient by setting `margin: 0 auto`.

<iframe src="https://terry-su.github.io/BlogCDN/iframes/css/auto/align-block-center/index.html?mode=css" ></iframe>

### 2. `margin-left: auto;` for flex items  
There's no `justify-self` like `align-self` for flex container(but grid had) so far. But you could make it by using `margin` together with `auto`.

<iframe src="https://terry-su.github.io/BlogCDN/iframes/css/auto/justify-flex-item/index.html?mode=css" ></iframe>


# Summary
CSS is interesting indeed. Without CSS it would drive lots of front-end developers crazy if they would spend long time to write complex styles like what we have to do for setting the style of canvas now. 
So far I have just found several interseting things about CSS above, so I would add new things interesting to this article at following time. 



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