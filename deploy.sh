git pull
yarn run build
pm2 delete "mytijaara-web-next-js-dev"
pm2 start npm --name "mytijaara-web-next-js-dev" -- start
