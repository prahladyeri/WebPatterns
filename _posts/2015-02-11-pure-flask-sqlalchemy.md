---
layout: post
title:  "Pure+flask+sqlalchemy"
date:   2015-02-11 15:53:54
tags: python flask sql-alchemy pure
description: A Flask template based on Purecss containing boilerplate code with basic connectivity with sql-alchemy and two dummy sql-alchemy models.
components: python flask~0.10.1 sqlalchemy-0.9.8 angularjs~1.2.6
---
A Flask template based on Purecss front-end for creating a flask app with basic connectivity with `sql-alchemy` and two dummy sql-alchemy models. The home page simply displays the content of these two models:

{% highlight python %}
TODO: put proper code here
from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
	return 'This Pattern Works!'

if __name__ == '__main__':
	app.run()
{% endhighlight %}


