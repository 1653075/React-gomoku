(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,r){},8:function(e,t,r){e.exports=r(9)},9:function(e,t,r){"use strict";r.r(t);var a=r(1),s=r(2),i=r(3),n=r(4),o=r(5),h=r(0),u=r.n(h),l=r(7),p=r.n(l);r(14);function d(e){return u.a.createElement("button",{className:"square",onClick:e.onClick,style:{backgroundColor:e.bgColor}},e.value)}var b=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"renderSquare",value:function(e,t){var r=this;return u.a.createElement(d,{value:this.props.squares[e],onClick:function(){return r.props.onClick(e)},bgColor:t})}},{key:"render",value:function(){for(var e=[],t=0,r=0;r<this.props.boardSize;r++){var a=[],s=0;switch(console.log(this.props.winIndex+" "+this.props.winState),this.props.winState){case 0:for(s=0;s<this.props.boardSize;s++)r*this.props.boardSize+s>=this.props.winIndex&&r*this.props.boardSize+s<this.props.winIndex+this.props.winSize?a.push(this.renderSquare(r*this.props.boardSize+s,"#00e673")):a.push(this.renderSquare(r*this.props.boardSize+s,"#ffffff"));break;case 1:for(s=0;s<this.props.boardSize;s++)(r*this.props.boardSize+s)%this.props.boardSize===this.props.winIndex%this.props.boardSize&&r*this.props.boardSize+s>=this.props.winIndex&&r*this.props.boardSize+s<=this.props.winIndex+(this.props.boardSize-1)*this.props.winSize?a.push(this.renderSquare(r*this.props.boardSize+s,"#00e673")):a.push(this.renderSquare(r*this.props.boardSize+s,"#ffffff"));break;case 2:for(s=0;s<this.props.boardSize;s++)r*this.props.boardSize+s===this.props.winIndex+this.props.boardSize*t+t&&r*this.props.boardSize+s>=this.props.winIndex&&r*this.props.boardSize+s<=this.props.winIndex+(this.props.boardSize-1)*this.props.winSize?(a.push(this.renderSquare(r*this.props.boardSize+s,"#00e673")),t++):a.push(this.renderSquare(r*this.props.boardSize+s,"#ffffff"));break;case 3:for(s=0;s<this.props.boardSize;s++)r*this.props.boardSize+s===this.props.winIndex+this.props.boardSize*t-t&&r*this.props.boardSize+s>=this.props.winIndex&&r*this.props.boardSize+s<this.props.winIndex+(this.props.boardSize-1)*this.props.winSize?(a.push(this.renderSquare(r*this.props.boardSize+s,"#00e673")),t++):a.push(this.renderSquare(r*this.props.boardSize+s,"#ffffff"));break;default:for(s=0;s<this.props.boardSize;s++)a.push(this.renderSquare(r*this.props.boardSize+s,"#ffffff"))}e.push(u.a.createElement("div",{className:"board-row"},a))}return u.a.createElement("div",null,e)}}]),r}(u.a.Component),c=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(e){var i;return Object(s.a)(this,r),(i=t.call(this,e)).state={boardSize:10,winSize:5,history:[{squares:Array(49).fill(null)}],moveArr:[],stepNumber:0,xIsNext:!0,colArr:[{squares:Array(49).fill(0)}],rowArr:[{squares:Array(49).fill(0)}],diagArr:[{squares:Array(49).fill(0)}],antidiagArr:[{squares:Array(49).fill(0)}]},i.handleChangeBoardSize=i.handleChangeBoardSize.bind(Object(a.a)(i)),i.handleSubmitBoardSize=i.handleSubmitBoardSize.bind(Object(a.a)(i)),i.handleChangeWinSize=i.handleChangeWinSize.bind(Object(a.a)(i)),i.handleSubmitWinSize=i.handleSubmitWinSize.bind(Object(a.a)(i)),i}return Object(i.a)(r,[{key:"handleChangeWinSize",value:function(e){this.setState({winSize:parseInt(e.target.value)})}},{key:"handleSubmitWinSize",value:function(e){alert("You now need "+parseInt(this.state.winSize)+" consecutive squares to win!!!"),e.preventDefault()}},{key:"handleChangeBoardSize",value:function(e){this.setState({boardSize:parseInt(e.target.value)})}},{key:"handleSubmitBoardSize",value:function(e){this.updateGameSize(this.state.boardSize),e.preventDefault()}},{key:"updateGameSize",value:function(e){this.setState({history:[{squares:Array(e*e).fill(null)}],moveArr:[],stepNumber:0,xIsNext:!0,colArr:[{squares:Array(e*e).fill(0)}],rowArr:[{squares:Array(e*e).fill(0)}],diagArr:[{squares:Array(e*e).fill(0)}],antidiagArr:[{squares:Array(e*e).fill(0)}]})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice(),a=this.state.moveArr.slice(0,this.state.stepNumber+1),s=this.state.winSize,i=this.state.rowArr.slice(0,this.state.stepNumber+1),n=i[i.length-1].squares.slice(),o=this.state.colArr.slice(0,this.state.stepNumber+1),h=o[o.length-1].squares.slice(),u=this.state.diagArr.slice(0,this.state.stepNumber+1),l=u[u.length-1].squares.slice(),p=this.state.antidiagArr.slice(0,this.state.stepNumber+1),d=p[p.length-1].squares.slice();null===f(r,n,h,l,d,s)&&(r[e]=this.state.xIsNext?"X":"O",this.addInRow(r,n,e,s,this.state.boardSize),this.addInCol(r,h,e,s,this.state.boardSize),this.addInDiag(r,l,e,s,this.state.boardSize),this.addInAntiDiag(r,d,e,s,this.state.boardSize),this.setState({history:t.concat([{squares:r}]),moveArr:a.concat(e),stepNumber:t.length,xIsNext:!this.state.xIsNext,rowArr:i.concat([{squares:n}]),colArr:o.concat([{squares:h}]),diagArr:u.concat([{squares:l}]),antidiagArr:p.concat([{squares:d}])}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0,winState:-1})}},{key:"addInRow",value:function(e,t,r,a,s){var i=r-a+1,n=Math.floor(r/s)*s;i<n&&(i=n);var o=0;if("X"===e[r])for(o=i;o<=r;o++)t[o]+=1;else for(o=i;o<=r;o++)t[o]-=1;console.log(i+" "+t[i])}},{key:"addInCol",value:function(e,t,r,a,s){var i=r-s*(a-1);i<0&&(i=0+r%s);var n=0;if("X"===e[r])for(n=i;n<=r;n+=s)t[n]+=1;else for(n=i;n<=r;n+=s)t[n]-=1}},{key:"addInDiag",value:function(e,t,r,a,s){var i=a-1;r-i<Math.floor(r/s)*s&&(i=r-Math.floor(r/s)*s),r-s*i<0&&(i=Math.floor(r/s));var n=r-s*i-i,o=0;if("X"===e[r])for(o=n;o<=r;o=o+s+1)t[o]+=1;else for(o=n;o<=r;o=o+s+1)t[o]-=1}},{key:"addInAntiDiag",value:function(e,t,r,a,s){var i=a-1;r+i>(Math.floor(r/s)+1)*s-1&&(i=(Math.floor(r/s)+1)*s-r-1),r-s*i<0&&(i=Math.floor(r/3));var n=r-s*i+i,o=0;if("X"===e[r])for(o=n;o<=r;o=o+s-1)t[o]+=1;else for(o=n;o<=r;o=o+s-1)t[o]-=1}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],s=this.state.rowArr[this.state.stepNumber].squares,i=this.state.colArr[this.state.stepNumber].squares,n=this.state.diagArr[this.state.stepNumber].squares,o=this.state.antidiagArr[this.state.stepNumber].squares,h=f(a.squares,s,i,n,o,this.state.winSize),l=function(e,t,r,a,s,i){for(var n=0;n<e.length;n++){if(Math.abs(t[n])===i)return n;if(Math.abs(r[n])===i)return n;if(Math.abs(a[n])===i)return n;if(Math.abs(s[n])===i)return n}return-1}(a.squares,s,i,n,o,this.state.winSize),p=function(e,t,r,a,s,i){for(var n=0;n<e.length;n++){if(Math.abs(t[n])===i)return 0;if(Math.abs(r[n])===i)return 1;if(Math.abs(a[n])===i)return 2;if(Math.abs(s[n])===i)return 3}return-1}(a.squares,s,i,n,o,this.state.winSize),d=r.map((function(e,r){var a=t.state.moveArr[r-1],s=Math.floor(a/t.state.boardSize)+1,i=a-Math.floor(a/t.state.boardSize)*t.state.boardSize+1,n=t.state.stepNumber===r,o=r?"Go to move #"+r+" ("+s+","+i+")":"Go to game start";return u.a.createElement("li",{key:r,style:n?{fontWeight:"bold"}:{fontWeight:"normal"}},u.a.createElement("button",{onClick:function(){return t.jumpTo(r)}},o))}));return e=h?"Winner: "+h:function(e){for(var t=0;t<e.length;t++)if(null===e[t])return!1;return!0}(a.squares)?"Draw!!!":"Next player: "+(this.state.xIsNext?"X":"O"),u.a.createElement("div",null,u.a.createElement("div",{className:"game-input"},u.a.createElement("form",{onSubmit:this.handleSubmitBoardSize},u.a.createElement("label",null,"Board Size:",u.a.createElement("input",{type:"number",value:this.state.boardSize,onChange:this.handleChangeBoardSize})),u.a.createElement("input",{type:"submit",value:"Submit"})),u.a.createElement("form",{onSubmit:this.handleSubmitWinSize},u.a.createElement("label",null,"Win Size:",u.a.createElement("input",{type:"number",value:this.state.winSize,onChange:this.handleChangeWinSize})),u.a.createElement("input",{type:"submit",value:"Submit"}))),u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"game-board"},u.a.createElement(b,{squares:a.squares,onClick:function(e){return t.handleClick(e)},boardSize:this.state.boardSize,winState:p,winIndex:l,winSize:this.state.winSize})),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",null,e),u.a.createElement("ol",null,d))))}}]),r}(u.a.Component);function f(e,t,r,a,s,i){for(var n=0;n<e.length;n++){if(Math.abs(t[n])===i)return e[n];if(Math.abs(r[n])===i)return e[n];if(Math.abs(a[n])===i)return e[n];if(Math.abs(s[n])===i)return e[n]}return null}p.a.render(u.a.createElement(c,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.533a8dbd.chunk.js.map