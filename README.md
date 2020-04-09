# schere stein papier

## Deploying _production_ build with docker

1. Build an image:`docker build --rm -f "Dockerfile" -t scheresteinpapier:latest "."`

2. Run the Dockerfile: `docker run --rm -d -p 5000:5000/tcp scheresteinpapier:latest`

3. React production build is running on port 5000.

## Deploying without docker

### 1. initial install with: `npm install`

### Running a Build

#### Serving the _production_ build on Port 5000

2. `npm run build`
3. `npx serve -s ./build/`

#### Serving the _development_ build on Port 3000

2. `npm start`

## Running Tests

This app uses jest as it's testing framework.

1. (`npm install`)
2. `npm test -- --watchAll` to run all tests
3. `npm test -- --coverage --watchAll` to run all tests including coverage

Hope you enjoy..

---

copyright 2020 tom thiemann
