"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[342],{342:function(A,e,r){r.r(e),r.d(e,{default:function(){return i}});var n,t=r(439),a=r(791),u=r(689),x=r(176),c=r(114),d=r(168),p=r(444).ZP.li(n||(n=(0,d.Z)(["\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n"]))),h=r(184);function i(){var A=(0,a.useState)(),e=(0,t.Z)(A,2),r=e[0],n=e[1],d=(0,u.UO)().movieId;if(console.log(d),(0,a.useEffect)((function(){try{(0,x.cI)(d).then((function(A){return n(A.data.cast)}))}catch(A){console.log(A)}}),[d]),r)return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("ul",{as:"ul",display:"grid",gridTemplateColumns:"250px 250px 250px 250px",gridGap:"10px",ml:"auto",mr:"auto",children:r.map((function(A){var e=A.profile_path?"https://image.tmdb.org/t/p/w300".concat(A.profile_path):c;return(0,h.jsxs)(p,{children:[(0,h.jsx)("img",{src:e,alt:"",width:"250px"}),(0,h.jsxs)("div",{p:"5px",children:[(0,h.jsx)("p",{children:A.name}),(0,h.jsxs)("p",{children:["Character : ",A.character]})]})]},A.id)}))})})}},114:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAYFBMVEXy8vJ2dnb19fX5+flxcXFzc3Pq6urMzMyurq5ubm5+fn6FhYVra2vi4uLn5+fu7u6+vr6VlZW3t7fFxcWQkJDT09Oampre3t6Tk5N6enqhoaHY2Nirq6uKioqenp67u7tegggxAAAE4klEQVR4nO3c63qrKBgFYP0QDxCPeIjH3P9dDmhMTJM9iXtmWtmz3j9NjenDKghioY4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3yD1d3Hopwu8TxqM0WkHEcZ2Jbxw7u4S5clPl3kHakbuetEO+tdxYT9d7M+Rcl1RBJ9TJee1b08jpSziY0KfYyHnNrVRyjw+rr0GfVAxbPCsCyjj+RWLq/79EGBtQIo7KUQZvOs/rA3YS4+7nJ+GN3Voa8D0fB0N2+DvE1oakProOozz7umUh+9sDVh4a8Cn0j/emlkakIX3gPHDCWke5duElgak6t5E0+37Sa3v5M6bhJYGdFK5djJqU12UTOawd05uB20N6ARiThhtK5DS6TqBqG91aG1AJ9ADoeeF2/coX2dSvF7r0N6AxBoVOJsbGfLztedx79ehvQFNjW3HA/K77Ux4TWhzwC/Cx4m8t7RS2wNuesuvjyqW65BCqwOSytMl4xB9Deh6ZsS3vAYzl0+6nigNXz2JiurU8oCZHgx5l+h87Yt8Lpe+1QFJzYM9n5zX+WwPSOr6hJTLl/HWgPY9dLoGVLdh/VdPgk1AsrYGM/H2CbfVTfSDfDYHpOCX7fIPCRh67/Mh4BH9DwJG+wJaOkxQ0YoPlL55/mZjQD2f/4id88Hx9YT3NftqUF+DzWfVNyN9L3q2KaB5XCjkDq2eUNnzF2zH8Sfdf3Ju/nT2GZeLyqaA1NTc20VmNuUzj+dVuEfW/HSJd6N0D9tWcgEAAAAAAAAAAADAn4ws2tr5W9Tk/3QR/lNp6Fq2w3qvpE/fn7Q47i+CEbH4drGZxQf3sprDZE4wx2hZdbAcT1NzeP0Eo2TZhff48UNgsqhKIbu5LVJalDK/7fokJROqhniQ5cWhfpJlMa+0J1UKUcdNHevP99M4TkFdm+NJWMruzYbD78b4KLssFLLRBeylDLOu7a5dC2VezIK2rbOwnVQ7VBc56tPisxsGqmsns5v54uZF0QlPx6LKLYtL154P1TMxTwS6FTZjzZwkPyeMWCAuy3ukeELBadDHKlcq3SgbGTpOKCrTPhUvY1Ii042cNXJwHF90vn7di+JIdciWLZ40tIyU28xFK+6LmnUNnnrzchzn/QWhdGJ5WQLkOqAJZn6KEg27iJjNO+vFkYZP5g2mOKw4MVbw+RAFfAm61KBnvmHncjmNO010XVWR6SZ6KpYwaVuxuuxnBT9gQNIB6RYweg5Ylstp3OmvAUnpgN7SHKnRAXN3XcN2sIBzx2gC6hY5FzcTtyb6HDCNxXXdiOlkynpuuTSMMevy+xK242B8DmiaKCVl7etrqJLhMr4/N1ETMB2kudZY4OprMJBhzyi+6J6KGi9z9HFfHep/d2yuQd3PizwLClnfdoZ48XMNUlOOWVUVojar9pQUUz2OlXkzFF2minw82DBxuwb1l7hrXXFZ78/0OJiYC9J5CKjv4Lq2baWqpGnRaTAMeVvPn6ly4Y7hnsWK3+B6xWzvu27vLbdqz6cxqhLTSsn8wxL9hcVjff/4kRrob1tDVEt/q28OrFqR9zEql13a+obuDw2oeGHaZTyWH0+srGJ2FoquK9tj9Zz/JmrCrhvUgSe8/xQdcJILAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgrb8AVdFTjJLjUDkAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=342.00bd42ca.chunk.js.map