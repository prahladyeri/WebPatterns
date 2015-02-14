---
layout: post
title:  "Pure+flask"
date:   2015-02-11 15:53:54
tags: python flask pure
description: A Flask template based on Purecss intended to provide a starting framework. No libraries like sql-alchemy are included.
components: python flask~0.10.1 purecss~0.5.0 angularjs~1.2.6
---
A Flask template based on [Purecss](http://purecss.io/) front-end for creating a Flask app without using `sql-alchemy` or any other database components. `pattern.py` just includes a `__main__` entry point and a single url handler:

{% highlight python %}
from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
	return 'This Pattern Works!'

if __name__ == '__main__':
	app.run()
{% endhighlight %}
