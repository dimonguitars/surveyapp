function localtunnel {
  lt -s posdgthergetesp --port 5000
}
until localtunnel; do
  echo 'localtunnel sever crashed'
  sleep 2
done
