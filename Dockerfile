FROM ubuntu:latest
LABEL authors="timla"

ENTRYPOINT ["top", "-b"]
