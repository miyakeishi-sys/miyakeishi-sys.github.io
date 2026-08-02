(() => {
  "use strict";

  const M = (columns, cells) => `<span class="mat c${columns}">${cells.map((x) => `<span>${x}</span>`).join("")}</span>`;
  const V = (cells) => M(1, cells);
  const D = (html) => `<div class="math"><div class="mathline">${html}</div></div>`;
  const E = (lines) => `<div class="equation-block">${lines.map((x) => `<span>${x}</span>`).join("")}</div>`;

  const answers = {
    "問1(1) 2本の同次方程式を満たす集合は部分空間か": `
      <p>零ベクトル <span class="formula">0=(0,0,0)ᵀ</span> は両方の等式を満たすので、<span class="formula">0∈W</span> である。</p>
      <p><span class="formula">u=(u₁,u₂,u₃)ᵀ, v=(v₁,v₂,v₃)ᵀ∈W</span> とする。このとき</p>
      ${E(["2(u₁+v₁)+3(u₂+v₂)−(u₃+v₃)","=(2u₁+3u₂−u₃)+(2v₁+3v₂−v₃)=0", "(u₁+v₁)−2(u₂+v₂)+3(u₃+v₃)=0"])}
      <p>より <span class="formula">u+v∈W</span> である。また、任意の <span class="formula">c∈R</span> に対して各左辺は元の左辺のc倍となるので <span class="formula">cu∈W</span> である。</p>
      <p class="answer-conclusion">以上より、WはR³の部分空間である。</p>`,

    "問1(2) 右辺が0でない連立条件ではどうなるか": `
      <p>零ベクトルを代入すると、第1式の左辺は0であるが右辺は1であり、等式を満たさない。したがって <span class="formula">0∉W</span> である。</p>
      <p class="answer-conclusion">部分空間は必ず零ベクトルを含むので、WはR³の部分空間ではない。</p>`,

    "3つの行列の積を計算して足し合わせる": `
      <p>各積を別々に計算する。</p>
      ${D(`${M(2,["−1","−1","1","0"])}+${M(2,["3","4","6","8"])}+${M(2,["5","0","0","5"])}`)}
      <p>行列の和は対応する成分ごとに計算するから、</p>
      ${D(`<span>=</span>${M(2,["−1+3+5","−1+4+0","1+6+0","0+8+5"])}<span>=</span>${M(2,["7","3","7","13"])}`)}
      <p class="answer-conclusion">したがって、答えは上の2×2行列である。</p>`,

    "問1 A⁶=O のとき E+A が正則であることを示す": `
      <p><span class="formula">B=E−A+A²−A³+A⁴−A⁵</span> とおく。分配法則により</p>
      ${E(["(E+A)B", "=E−A+A²−A³+A⁴−A⁵+A−A²+A³−A⁴+A⁵−A⁶", "=E−A⁶=E"])}
      <p>を得る。同様に <span class="formula">B(E+A)=E</span> である。</p>
      <p class="answer-conclusion">よってE+Aは正則であり、(E+A)⁻¹=E−A+A²−A³+A⁴−A⁵である。</p>`,

    "問2 (E+A)¹⁰ を計算する": `
      <p>まず行列積を計算すると</p>
      ${D(`<span>A²=</span>${M(3,["0","0","1","0","0","0","0","0","0"])}<span>, A³=O</span>`)}
      <p>EとAは可換なので二項定理が使える。A³以上の項はすべてOであるから、</p>
      ${E(["(E+A)¹⁰=E+10A+₁₀C₂A²", "=E+10A+45A²"])}
      ${D(`<span>=</span>${M(3,["1","10","55","0","1","10","0","0","1"])}`)}
      <p class="answer-conclusion">これが求める行列である。</p>`,

    "Aの階数と PA=B を満たす正則行列Pを求める": `
      <p>拡大した行列 <span class="formula">[A｜E₃]</span> に行基本変形を施すと、</p>
      ${D(`<span>[A｜E₃] → [B｜P],　B=</span>${M(4,["1","0","−1","0","0","1","4","0","0","0","0","1"])}<span>,　P=</span>${M(3,["2","1","0","−1","−1","1","9","3","2"])}`)}
      <p>Bの零でない行は3本であるから <span class="formula">rank A=rank B=3</span> である。また、右側のE₃にも同じ行基本変形を行ったので、行操作を表す行列がPであり <span class="formula">PA=B</span> を満たす。</p>
      <p class="answer-conclusion">したがってrank A=3であり、上のPが求める正則行列である。</p>`,

    "正則となるa,bの条件と逆行列を求める": `
      <p>第3行について展開すると <span class="formula">det A=−a</span> である。よってAが正則であるための必要十分条件は <span class="formula">a≠0</span> である。</p>
      <p><span class="formula">a≠0</span> のもとで <span class="formula">[A｜E₃]</span> を掃き出すと、</p>
      ${D(`<span>A⁻¹=</span>${M(3,["1/a","0","−1/a","0","0","1","−1/a","1","1/a−b"])}`)}
      <p>実際にこの行列をAの左右から掛けるとE₃になる。</p>
      <p class="answer-conclusion">したがって、正則条件はa≠0であり、bは任意である。</p>`,

    "問1(1)〜(4) 行列式を計算する": `
      <h4>(1)</h4><p><span class="formula">2·1−3(−1)=5</span>。</p>
      <h4>(2)</h4><p><span class="formula">a·4−(−1)(−a)=4a−a=3a</span>。</p>
      <h4>(3)</h4><p>第1行について展開すると、<span class="formula">1·(1·1−1·(−1))+2·(3·(−1)−1·2)=2−10=−8</span>。</p>
      <h4>(4)</h4><p>第1行について展開して整理すると、<span class="formula">a³+b³+c³−3abc</span>。さらに</p>
      <p class="formula">a³+b³+c³−3abc=(a+b+c)(a²+b²+c²−ab−bc−ca)</p>
      <p class="answer-conclusion">答えは順に5、3a、−8、a³+b³+c³−3abcである。</p>`,

    "問1(1) 3本のベクトルは基底か": `
      <p><span class="formula">c₁v₁+c₂v₂+c₃v₃=0</span> とする。成分を比較すると</p>
      ${E(["c₁+c₃=0", "c₂=0", "c₁+c₂=0"])}
      <p>を得る。第2式から <span class="formula">c₂=0</span>、第3式から <span class="formula">c₁=0</span>、第1式から <span class="formula">c₃=0</span> である。したがって3本は一次独立である。</p>
      <p class="answer-conclusion">R³における3本の一次独立なベクトルなので、これらはR³の基底である。</p>`,

    "問1(2) 一次従属な3本を見抜く": `
      <p>3本をv₁,v₂,v₃とすると、直接計算により <span class="formula">v₁+v₂−v₃=0</span> が成り立つ。係数 <span class="formula">1,1,−1</span> はすべて0ではない。</p>
      <p class="answer-conclusion">よって3本は一次従属であり、R³の基底ではない。</p>`,

    "Aと可換するすべての2次正方行列Bを求める": `
      <p>${M(2,["a","b","c","d"])} をBとおく。このとき</p>
      ${D(`<span>AB=</span>${M(2,["a+2c","b+2d","c","d"])}<span>,　BA=</span>${M(2,["a","2a+b","c","2c+d"])}`)}
      <p>である。対応する成分を比較すると <span class="formula">c=0,d=a</span> を得る。a,bにはこれ以上の条件はない。</p>
      ${D(`<span class="answer-conclusion">したがって B=</span>${M(2,["a","b","0","a"])}<span>（a,b∈R）</span>`)} `,

    "問1(1)〜(4) ブロック積を計算する": `
      <h4>(1)</h4>${D(`${M(4,["a₁b₁","a₁b₂","a₁b₃","a₁b₄","a₂b₁","a₂b₂","a₂b₃","a₂b₄","a₃b₁","a₃b₂","a₃b₃","a₃b₄"])}`)}
      <h4>(2)</h4>${D(`${M(2,["aa′","ab′+bC′","O","CC′"])}`)}
      <h4>(3)</h4>${D(`${M(2,["α₁a+α₂b+α₃c","β₁a+β₂b+β₃c"])}`)}
      <h4>(4)</h4>${D(`${M(3,["Aa","Ab","Ac"])}`)}
      <p class="answer-conclusion">いずれも通常の行列積と同じく、ブロックの行と列の積を足して求める。</p>`,

    "問2 ブロック上三角行列Qの逆行列": `
      <p>Qを <span class="formula">Q=[A C;O B]</span> と2×2ブロックに分ける。ブロック積をEと比較すると</p>
      ${D(`<span>Q⁻¹=</span>${M(2,["A⁻¹","−A⁻¹CB⁻¹","O","B⁻¹"])}`)}
      <p>である。各ブロックを計算して元の4×4行列へ戻すと、</p>
      ${D(`<span class="answer-conclusion">Q⁻¹=</span>${M(4,["−1","5/2","−39/2","10","1","−2","17","−9","0","0","−1","1","0","0","3","−2"])}`)} `,

    "問1 複素数を含む3次行列の逆行列": `
      <p><span class="formula">[A｜E₃]</span> に行基本変形を施し、左側をE₃にすると、右側から</p>
      ${D(`<span>A⁻¹=1/4</span>${M(3,["0","−1+i","1−i","4−4i","6−2i","−2+2i","4i","2i","−2i"])}`)}
      <p>を得る。複素数成分を含む場合も行基本変形の規則は同じである。</p>
      <p class="answer-conclusion">上の行列をAに掛けるとE₃になるので、これがAの逆行列である。</p>`,

    "問2 解が存在するa,bの条件": `
      <p>拡大係数行列を行基本変形すると、係数がすべて0である行から</p>
      ${E(["0=−3a", "0=−4a+b−2"])}
      <p>を得る。連立方程式が解をもつためには、これらの右辺がともに0でなければならない。第1式より <span class="formula">a=0</span>、これを第2式へ代入して <span class="formula">b=2</span>。</p>
      <p class="answer-conclusion">したがって、解が存在するための必要十分条件はa=0,b=2である。</p>`,

    "置換σを互換の積で表し、符号を求める": `
      <p>右端から作用させると、与えられた置換は</p>
      <p class="formula">σ=(3 5)(1 4)(2 3)(1 2)</p>
      <p>と表せる。これは4個の互換の積であるから、</p>
      <p class="formula">sgn(σ)=(−1)⁴=1</p>
      <p class="answer-conclusion">よってσは偶置換であり、符号は+1である。</p>`,

    "問1 4次行列式を工夫して計算する": `
      <p><span class="formula">R₃←R₃−R₁</span> とする。この操作では行列式の値は変わらない。第3行は <span class="formula">(0,0,−1,0)</span> となるので、この行について余因子展開する。</p>
      <p>残った3次行列式をさらに0の多い行・列について展開して計算すると4を得る。</p>
      <p class="answer-conclusion">したがって、与えられた4次行列式の値は4である。</p>`,

    "問2 |A|=−2, |B|=−1 のとき |−3AB|": `
      <p>A,Bは3次正方行列であるから、<span class="formula">det(cC)=c³det C</span> を使う。また <span class="formula">det(AB)=det A det B</span> である。</p>
      ${E(["det(−3AB)=(−3)³det(AB)", "=(−27)det A det B", "=(−27)(−2)(−1)=−54"])}
      <p class="answer-conclusion">よって|−3AB|=−54である。</p>`,

    "問1(1)〜(6) R³の部分集合を判定する": `
      <h4>(1)</h4><p>同次連立方程式の解集合である。零ベクトルを含み、方程式の線形性から和とスカラー倍で閉じるので、部分空間である。</p>
      <h4>(2)</h4><p>零ベクトルは第1式を満たさない。よって部分空間ではない。</p>
      <h4>(3)</h4><p>${V(["1","0","0"])} と ${V(["2","0","0"])} はWに入るが、和 ${V(["3","0","0"])} はWに入らない。よって部分空間ではない。</p>
      <h4>(4)</h4><p>${V(["1","1","1"])} と ${V(["1","−1","1"])} はWに入るが、和 ${V(["2","0","2"])} はWに入らない。よって部分空間ではない。</p>
      <h4>(5)</h4><p>条件は <span class="formula">(x₂−x₃)²=0</span>、すなわち <span class="formula">x₂=x₃</span> と同値である。これは同次一次方程式の解集合なので部分空間である。</p>
      <h4>(6)</h4><p>条件は <span class="formula">x₁=x₃</span> または <span class="formula">x₁=−x₃</span>。${V(["1","0","1"])} と ${V(["1","0","−1"])} は入るが、和は入らない。よって部分空間ではない。</p>`,

    "問2(1)〜(3) 多項式空間の部分集合を判定する": `
      <h4>(1)</h4><p>零多項式は <span class="formula">f(−1)=1</span> を満たさないので、部分空間ではない。</p>
      <h4>(2)</h4><p><span class="formula">f=−2−x−x²+x³</span> はWに入るが、<span class="formula">−f</span> は <span class="formula">(−f)(1)=3&gt;0</span> となりWに入らない。よってスカラー倍で閉じず、部分空間ではない。</p>
      <h4>(3)</h4><p>零多項式は条件を満たす。f,gが条件を満たせば、微分の線形性から <span class="formula">(f+g)″−2x(f+g)′=0</span>、また <span class="formula">(cf)″−2x(cf)′=0</span>。よって部分空間である。</p>`,

    "問3(1) 連立方程式で定まるWの基底と次元": `
      <p>係数行列を簡約階段形にすると</p>
      ${D(`${M(5,["1","0","1","0","2","0","1","0","0","0","0","0","0","1","−1"])}`)}
      <p>となる。<span class="formula">x₃=c₁,x₅=c₂</span> とおくと <span class="formula">x₁=−c₁−2c₂,x₂=0,x₄=c₂</span> である。したがって</p>
      ${D(`<span>x=c₁</span>${V(["−1","0","1","0","0"])}<span>+c₂</span>${V(["−2","0","0","1","1"])}`)}
      <p class="answer-conclusion">よって基底の1組は上の2本であり、dim W=2である。</p>
      <div class="answer-note">解答例のdim W=3は誤記と考えられる。自由変数は2個で、表示された基底も2本である。</div>`,

    "問3(2) 5変数2方程式の解空間": `
      <p>連立方程式を掃き出し、<span class="formula">x₂=c₁,x₄=c₂,x₅=c₃</span> とおくと、<span class="formula">x₁=2c₁−3c₂−c₃,x₃=c₂−2c₃</span> である。よって</p>
      ${D(`<span>x=c₁</span>${V(["2","1","0","0","0"])}<span>+c₂</span>${V(["−3","0","1","1","0"])}<span>+c₃</span>${V(["−1","0","−2","0","1"])}`)}
      <p class="answer-conclusion">したがって、この3本が基底の1組であり、dim W=3である。</p>`,

    "問4 積分条件で定まる多項式空間": `
      <p>零多項式の積分は0である。またf,g∈W、c∈Rに対して、積分の線形性より</p>
      ${E(["∫₋₁¹(f+g)dx=∫₋₁¹f dx+∫₋₁¹g dx=0", "∫₋₁¹cf dx=c∫₋₁¹f dx=0"])}
      <p>なのでWは部分空間である。<span class="formula">f=a₀+a₁x+a₂x²+a₃x³</span> とおくと、条件は <span class="formula">2a₀+(2/3)a₂=0</span>、すなわち <span class="formula">a₀=−a₂/3</span>。したがって</p>
      <p class="formula">f=a₁x+a₂(x²−1/3)+a₃x³</p>
      <p class="answer-conclusion">よって基底の1組は{x,x²−1/3,x³}であり、dim W=3である。</p>`,

    "問5 W₁+…+Wₖ が部分空間であることを示す": `
      <p>各Wᵢは部分空間なので <span class="formula">0∈Wᵢ</span>。したがって <span class="formula">0=0+…+0∈W₁+…+Wₖ</span> である。</p>
      <p><span class="formula">x=x₁+…+xₖ, y=y₁+…+yₖ</span> を和空間の元とする。各 <span class="formula">xᵢ,yᵢ∈Wᵢ</span> なので <span class="formula">xᵢ+yᵢ∈Wᵢ</span>。よって <span class="formula">x+y=(x₁+y₁)+…+(xₖ+yₖ)</span> も和空間に入る。</p>
      <p>またc∈Rに対して <span class="formula">cx=cx₁+…+cxₖ</span> であり、各 <span class="formula">cxᵢ∈Wᵢ</span> なのでcxも和空間に入る。</p>
      <p class="answer-conclusion">以上より、W₁+…+WₖはVの部分空間である。</p>`,

    "問6 V+W の基底と次元": `
      <p>VとWの生成ベクトルを順に列に並べる。</p>
      ${D(`${M(4,["1","0","1","1","0","1","−1","−1","2","0","1","2","2","1","1","1"])}`)}
      <p>これを行基本変形すると、第1、第2、第3列が主列となり、第4列はそれらの一次結合である。したがって元の第1、第2、第3列を選べばよい。</p>
      ${D(`<span class="answer-conclusion">基底：</span>${V(["1","0","2","2"])}<span>,</span>${V(["0","1","0","1"])}<span>,</span>${V(["1","−1","1","1"])}`)}
      <p class="answer-conclusion">よってdim(V+W)=3である。</p>`,

    "問1(1)〜(4) ベクトル・行列計算": `
      <h4>(1)</h4>${D(`${V(["2","2","4","−2"])}+${V(["−3","3","0","−6"])}=${V(["−1","5","4","−8"])}`)}
      <h4>(2)</h4>${D(`${M(2,["0","4","4","−4","−12","−4"])}−${M(2,["3","4","0","1","−5","2"])}=${M(2,["−3","0","4","−5","−7","−6"])}`)}
      <h4>(3)</h4>${D(`${M(3,["11","8","7","3","1","−8"])}`)}
      <h4>(4)</h4><p>最初の積は ${M(2,["1","−1","−1","0"])} である。したがって</p>${D(`<span>−2</span>${M(2,["1","−1","−1","0"])}<span>+2</span>${M(2,["−3","1","1","1"])}<span>=</span>${M(2,["−8","4","4","2"])}`)}`,

    "問2(1) 一意解をもつ3元連立方程式": `
      <p>拡大係数行列を行基本変形する。</p>
      ${D(`${M(4,["1","2","1","0","1","−1","1","2","2","1","−1","−1"])}<span>→</span>${M(4,["1","0","0","1/3","0","1","0","−2/3","0","0","1","1"])}`)}
      <p>左側がE₃になったので右端の列が解である。</p>
      ${D(`<span class="answer-conclusion">x=</span>${V(["1/3","−2/3","1"])}`)} `,

    "問2(2) 自由変数をもつ4元連立方程式": `
      <p>拡大係数行列を簡約階段形にすると、主変数はx₁,x₂、自由変数はx₃,x₄となる。<span class="formula">x₃=c₁,x₄=c₂</span> とおけば</p>
      ${E(["x₁=−2c₁−c₂", "x₂=3c₁+2c₂+1"])}
      <p>したがって一般解は</p>
      ${D(`<span class="answer-conclusion">x=</span>${V(["−2c₁−c₂","3c₁+2c₂+1","c₁","c₂"])}<span>（c₁,c₂∈R）</span>`)} `,

    "問2(3) 解が存在しない4元連立方程式": `
      <p>拡大係数行列を行基本変形すると、</p>
      ${D(`${M(5,["5","−2","12","5","2","2","−3","3","0","1","1","1","−1","−1","1","0","0","0","0","1"])} `)}
      <p>のように最下行が <span class="formula">[0 0 0 0｜1]</span> となる。この行は方程式 <span class="formula">0=1</span> を表し、矛盾する。</p>
      <p class="answer-conclusion">したがって、この連立方程式は解をもたない。</p>`,

    "問3(1)〜(3) 逆行列を求める": `
      <p>各小問で <span class="formula">[A｜E]</span> を行基本変形し、左側をEにする。</p>
      <h4>(1)</h4>${D(`<span>A⁻¹=</span>${M(2,["−1/3","2/3","2/3","−1/3"])}`)}
      <h4>(2)</h4>${D(`<span>A⁻¹=</span>${M(3,["−1","−4","3","2","7","−5","0","−2","1"])}`)}
      <h4>(3)</h4>${D(`<span>A⁻¹=</span>${M(4,["1/4","1/2","1/4","0","1/2","3/4","0","−1/4","1/4","0","−3/4","1/2","0","−1/4","1/2","−1/4"])}`)}
      <p class="answer-conclusion">いずれも元のAとの積が単位行列になる。</p>`,

    "問4 ブロック行列のk乗を帰納法で示す": `
      <p><span class="formula">k=1</span> では明らかに成り立つ。ある正整数kで</p>
      ${D(`<span>Mᵏ=</span>${M(2,["Eₘ","kA","O","Eₙ"])}`)}
      <p>と仮定する。このとき</p>
      ${D(`<span>Mᵏ⁺¹=MᵏM=</span>${M(2,["Eₘ","kA","O","Eₙ"])}${M(2,["Eₘ","A","O","Eₙ"])}<span>=</span>${M(2,["Eₘ","(k+1)A","O","Eₙ"])}`)}
      <p class="answer-conclusion">よって数学的帰納法により、すべての正整数kでMᵏ=[Eₘ kA;O Eₙ]である。</p>`,

    "問5 2A²+3A−7E=O から逆行列を作る": `
      <p>与式を移項すると <span class="formula">2A²+3A=7E</span> である。したがって</p>
      ${E(["A{(1/7)(2A+3E)}=E", "{(1/7)(2A+3E)}A=E"])}
      <p>が成り立つ。左右から掛けてEになる行列が存在するのでAは正則である。</p>
      <p class="answer-conclusion">A⁻¹=(1/7)(2A+3E)である。</p>`,

    "問6 A⁴=O のとき E+A の逆行列": `
      <p><span class="formula">B=E−A+A²−A³</span> とおく。このとき</p>
      ${E(["(E+A)B=E−A⁴=E", "B(E+A)=E−A⁴=E"])}
      <p>である。よってE+Aは正則である。</p>
      <p class="answer-conclusion">(E+A)⁻¹=E−A+A²−A³である。</p>`
  };

  let inserted = 0;
  document.querySelectorAll("details.problem").forEach((problem) => {
    const summary = problem.querySelector(":scope > summary");
    const content = problem.querySelector(":scope > .problem-content");
    if (!summary || !content) return;
    const answer = answers[summary.textContent.trim()];
    if (!answer) return;

    const block = document.createElement("details");
    block.className = "model-answer";
    block.innerHTML = `<summary>提出答案例</summary><div class="answer-paper">${answer}<div class="answer-note">答案では、途中計算だけでなく、最後に「したがって何が言えるか」を1文で結んでください。</div></div>`;
    content.append(block);
    inserted += 1;
  });

  document.documentElement.dataset.modelAnswers = String(inserted);
})();
