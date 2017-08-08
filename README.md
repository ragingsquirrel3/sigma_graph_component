# Sigma Graph Component

React component to control and animate a [sigma.js](http://sigmajs.org/) network diagram.

### Usage

```javascript
var optional_data = { 
  nodes: [
    { 
      id: 1,
      name: 'hello',
      category: 'dog'
    },
    {
      id: 2,
      name: 'world',
      category: 'cat'
    }
  ],
  edges: [
    {
      source: 1,
      target: 2
    }
  ]
};
// a new stage forces the graph to animate update
return <Graph data={optional_data} stage={0} />;
```

### Development, Install dependencies

```
npm install
```

### Developing locally

1. Run

	```
	npm run dev
	```

2. In your browser, navigate to: [http://localhost:8080/](http://localhost:8080/)

### Publish

1. In `webpack.config.js` file, replace `www.example.com` with the real domain name.

2. Run

	```
	npm run build
	```

3. Copy the following folders/files to web server

	/build,
	/image,
	index.html
