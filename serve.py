#!/usr/bin/env python3
"""Local preview server that never caches, so a normal reload always shows the latest build."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCache(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, max-age=0')
        super().end_headers()


if __name__ == '__main__':
    ThreadingHTTPServer(('127.0.0.1', 4173), NoCache).serve_forever()
