# iClamp.js

一款jquery插件，为了解决多行结尾处添加省略号的兼容性问题。

*注意：*
对于文本在十万级，百万级的，性能无法得到保证。

### 如何使用这个插件？

```html
<head>
    <script src="jquery.js" type="text/javascript"></script>
    <script src="iclamp.js" type="text/javascript"></script>
</head>
```

*Examples*

为需要添加省略号的元素添加一个类名 clamp-ellipsis：

```html
<div class="container">
	<p class="clamp-ellipsis">Lorem Ipsum is simply dummy text.</p>
</div>
```
然后使用该插件。

```javascript
$(document).ready(function() {
    var $container = $('.container');
    $container.clamp({clamp: 4});
});
```

