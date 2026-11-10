/// <reference path="../types/index.d.ts" />
/// <reference path="custom-types.d.ts" />

/**
 * 云枢表单自定义代码
 * 
 * 关联文件: custom.html, custom.css
 * 
 * 使用说明:
 * - 使用 tsc 编译此文件，或手动转换为 JS
 * - 复制编译后的 JS 代码到云枢平台的 JS 编辑窗口
 * 
 * 可用控件:
 * - Sheet1731470343749 (点检列表/子表)
 * - StaffSingle1712900947207 (点检人/人员选择)
 * - StaffSingle1785117016858 (TL/人员选择)
 * - StaffSingle1712900951509 (技术员/人员选择)
 * - DeptSingle1773909390542 (厂家公司/部门选择)
 * - StaffSingle1773903848418 (厂家人员/人员选择)
 * - Radio1783909240811 (工程状态/单选框)
 * - CheckedDate (点检日期/日期)
 * - CX (产线/下拉单选)
 * - CheXing (车型/下拉单选)
 * - QY (区域/下拉单选)
 * - GC (工程/下拉单选)
 * - GW (岗位/下拉单选)
 * - ShortText1784702013805 (设备编号/短文本)
 * - Attachment1779344970063 (产家自检纸质表/附件/图片)
 * - Checkbox1784947958493 (点检列表项目/复选框)
 * - ShortText1780978073160 (流程节点/短文本)
 * - ShortText1773903757119 (点检类型_Str/短文本)
 * 子表 "点检列表" 的列:
 * - CheckedItmeType (分类/短文本)
 * - site (部位/短文本)
 * - itemsToCheck (检查项目/短文本)
 * - schematic (示意图/附件/图片)
 * - CheckedResult (点检人_点检结果/单选框)
 * - NGType (点检人_NG类型/单选框)
 * - NGPlace (点检人_NG位置/长文本)
 * - NGDescription (点检人_NG描述/长文本)
 * - NGPhoto (点检人_NG图片/附件/图片)
 * - statusOfProblemConfirmation (厂家_整改前确认问题/单选框)
 * - deadlineForRectification (厂家_整改的限定日期/日期)
 * - Radio1773910970705 (厂家_整改状态/单选框)
 * - pictureAfterRectification (厂家_整改后图片/附件/图片)
 * - confirmTheRectificationEffec (点检人_确认整改效果/单选框)
*/

// ========== 以下代码复制到云枢 JS 窗口 ==========
// ========== 生命周期事件 ==========


// 导入外部JS
async function loadJS(url) {
  return new Promise<void>((resolve, reject) => {
    // 防止重复加载
    if (document.querySelector(`script[src="${url}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = url;
    // async 保证脚本异步下载且不阻塞解析，同时保持执行顺序无关性
    // 若需要严格保序，可改为 script.defer = true
    script.async = true;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load JS: ${url}`));

    document.head.appendChild(script);
  });
}

// 导入外部CSS
async function loadCSS(url) {
  return new Promise<void>((resolve, reject) => {
    // 防止重复加载
    if (document.querySelector(`link[href="${url}"]`)) {
      resolve();
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;

    // 监听加载成功（部分浏览器不支持 onload，需 fallback）
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load CSS: ${url}`));

    // 为兼容旧版 Safari/Firefox，添加到 head 后再设置 href（防缓存问题）
    document.head.appendChild(link);
  });
}

/**  
* 隐藏特定的操作按钮
* @param {string} code 编码 ( 'submit' 提交, 'agree' 同意, 'showReject' 驳回, 'save' 暂存, 'print' 打印, 'circulate' 传阅, 'copy' 复制 ) 
* @param {any} actions 可选参数，默认填 this.actions  
*/
function hideActionButton(code, actions) {
  const btn = actions.find(function (a) {
    return a.code == code;
  });
  if (btn) {
    btn.visible = false;
  }
}


/**
 * 用户按钮
 */
const ActionCodes = {
  /**
   * 同意
   */
  AGREE: 'agree',
  /**
   * 驳回
   */
  SHOW_REJECT: 'showReject',
  /**
   * 传阅
   */
  CIRCULATE: 'circulate',
  /**
   * 打印
   */
  PRINT: 'print',
  /**
   * 复制
   */
  COPY: 'copy',
  /**
   * 暂存
   */
  SAVE: 'save',
  /**
   * 提交
   */
  SUBMIT: 'submit'
};

/**
 * 用户按钮管理
 */
class defaultBtnManager {
  #actions
  /**
   * 填入默认值：this.actions
   */
  constructor(actions) {
    this.#actions = actions;
  }

  /**  
  * 显示或隐藏特定的操作按钮  
  * @param {keyof typeof ActionCodes} code 枚举值
  * @param {boolean} display 显示：true，隐藏：false
  */
  actionBtnDisplay(code, display) {
    const btn = this.#actions.find(a => a.code == code);
    if (btn) {
      btn.visible = display;
    }
  }
}

/**
 * 用api读取表单信息
 */
async function getFormData(axios, objectId, schemaCode) {
  var data = JSON.stringify({
    "objectId": objectId,
    "schemaCode": schemaCode
  });

  var config = {
    method: 'post',
    url: '/api/v2/bizobject/load',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data
  };

  try {
    const response = await axios(config);
    return response.data.bizObject.data;

  } catch (error) {
    console.error("获取表单数据失败:", error);
    throw error;
  }
}

// var Sheet1731470343749RowHasChange = false; // 子表有新增行
// var sheetF;
// var sw1 = null;
var sw2 = null;
var bm = null; //用户按钮管理定义
//#endregion

//数据加载后，渲染之前，this为window
form.on('onLoad', function (data, dataPermission, interceptConfig) {
  bm = new defaultBtnManager(this.actions); //用户按钮管理定义
}, 'cover');
//渲染完成后
form.on('onRendered', function (data) {

  // 电脑端子表头“操作”列，边距样式优化
  if (this.isMobile == false) {
    if (!window.__sheetHeadCustomScrollbarMargin) {
      window.__sheetHeadCustomScrollbarMargin = true;
      const BODY_SELECTOR = '.sheet__body';
      const COL_SELECTOR = '.sheet__row.sheet__head > div:nth-child(3)';
      const MARGIN_CLASS = 'custom-scrollbar-margin';

      // 注入样式（只执行一次）
      if (!document.getElementById('scrollbar-margin-style')) {
        const style = document.createElement('style');
        style.id = 'scrollbar-margin-style';
        style.textContent = `.${MARGIN_CLASS} { margin-right: 12px !important; }`;
        document.head.appendChild(style);
      }

      function updateMargin() {
        const bodies = document.querySelectorAll(BODY_SELECTOR);
        bodies.forEach((body) => {
          const hasScrollbar = body.scrollHeight > body.clientHeight;
          // 找到该 body 内所有目标列
          const col = document.querySelector(COL_SELECTOR);
          if (hasScrollbar) {
            col.classList.add(MARGIN_CLASS);
          } else {
            col.classList.remove(MARGIN_CLASS);
          }
        });
      }

      // 初始执行
      updateMargin();

      // 监听 DOM 变化（数据加载、行增减等）
      const observer = new MutationObserver(() => {
        requestAnimationFrame(updateMargin);
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class'],
      });

      // 窗口 resize 时重新检测
      window.addEventListener('resize', updateMargin);
    }
  }

  // 平板端访问电脑页面的时候，使用下拉项时屏蔽键盘弹出
  if (this.isMobile == false) {
    if (!window.__mobileSelectInputmodePatched) {
      window.__mobileSelectInputmodePatched = true;

      const INPUT_SEL = '.ant-select-search__field';

      function lockInputs(root = document) {
        const inputs = root.querySelectorAll(INPUT_SEL);
        inputs.forEach((input) => {
          if (!input.dataset.inputmodeLocked) {
            input.setAttribute('inputmode', 'none');
            input.dataset.inputmodeLocked = 'true';
          }
        });
      }

      // 表单渲染完成后立即执行
      lockInputs();

      const observer = new MutationObserver(() => {
        lockInputs();
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  // 平板端优化子表横向触摸滑动
  if (this.isMobile == false) {
    if (!window._sheetBodyOverflowXTouch) {
      window._sheetBodyOverflowXTouch = true;
      // 替换为实际存在的静态父容器
      const PARENT_SELECTOR = '.ant-spin-container';
      const parentContainer = document.querySelector(PARENT_SELECTOR);

      if (!parentContainer) {
        console.error(`未找到静态父容器: ${PARENT_SELECTOR}`);
      } else {
        let startX = 0;
        let startY = 0;
        let isHorizontal = null;
        let activeColsContainer = null; // 缓存当前触摸的 .sheet__cols

        parentContainer.addEventListener('touchstart', (e) => {
          // 动态查找当前触摸的 .sheet__body
          const body = e.target.closest('.sheet__body');

          // 如果点击区域不在表格内，或点在表单元素上，直接放行
          if (!body) {
            isHorizontal = false;
            activeColsContainer = null;
            return;
          }

          // 动态获取对应的 .sheet__cols
          activeColsContainer = body.querySelector('.sheet__cols');
          if (!activeColsContainer) {
            isHorizontal = false;
            return;
          }

          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
          isHorizontal = null;
        }, { passive: true });

        parentContainer.addEventListener('touchmove', (e) => {
          // 无有效滚动容器或已判定为纵向，直接放行
          if (!activeColsContainer || isHorizontal === false) return;

          const deltaX = e.touches[0].clientX - startX;
          const deltaY = e.touches[0].clientY - startY;

          // 方向锁定判定
          if (isHorizontal === null) {
            if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
              isHorizontal = Math.abs(deltaX) > Math.abs(deltaY);
              if (!isHorizontal) return;
            }
            return;
          }

          // 安全拦截 + 驱动滚动
          if (e.cancelable) {
            e.preventDefault();
          }
          activeColsContainer.scrollLeft -= deltaX;

          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
        }, { passive: false });

        parentContainer.addEventListener('touchend', () => {
          isHorizontal = null;
          activeColsContainer = null; // 释放引用，防止内存泄漏
        }, { passive: true });

        console.log('事件委托已绑定，支持动态子表横向滚动');
      }
    }
  }

  // 手机端加载viewerjs图片预览库，实现双指缩放
  if (this.isMobile) {
    loadJS("https://cdn.jsdelivr.net/npm/viewerjs@1.11.8/dist/viewer.min.js");
    loadCSS("https://cdn.jsdelivr.net/npm/viewerjs@1.11.8/dist/viewer.min.css");

    if (!window.__h3ImgPinchZoomBound) {
      window.__h3ImgPinchZoomBound = true;

      var currentViewer = null;
      var PHOTO_ITEM_SEL = '.h3think-upload-list-photo-item:not(.h3think-upload-btn)';
      var FRAMEWORK_VIEWER_SEL = '.cloudpivot-mobile-h3-img-viewer, .h3think-image-viewer';

      // ========== 工具函数（与之前相同）==========
      function extractBgUrl(el) {
        if (!el) return '';
        var bg = el.style.backgroundImage || window.getComputedStyle(el).backgroundImage || '';
        var m = bg.match(/url\(["']?(.+?)["']?\)/);
        return m ? m[1] : '';
      }

      function collectGroupPhotos(clickedItem) {
        // 从点击的图片项向上查找最近的 .h3-upload-list-photo 容器
        var groupContainer = clickedItem;
        while (groupContainer && groupContainer !== document.body) {
          if (groupContainer.classList && groupContainer.classList.contains('h3-upload-list-photo')) {
            break;
          }
          groupContainer = groupContainer.parentElement;
        }

        // 如果找不到分组容器，降级为只展示当前这一张
        if (!groupContainer || groupContainer === document.body) {
          var url = extractBgUrl(clickedItem);
          return url ? [{ el: clickedItem, url: url }] : [];
        }

        // 仅在当前分组容器内收集图片
        var items = groupContainer.querySelectorAll(PHOTO_ITEM_SEL);
        var result = [];
        for (var i = 0; i < items.length; i++) {
          var url = extractBgUrl(items[i]);
          if (url && url.length > 10) {
            result.push({ el: items[i], url: url });
          }
        }

        // console.log('[PinchZoom] 分组收集完成, 容器=', groupContainer.className.substring(0, 50), ', 图片数=' + result.length);
        return result;
      }

      function openViewer(startIndex, urls) {
        if (currentViewer) { try { currentViewer.destroy(); } catch (e) { } currentViewer = null; }
        if (!urls || urls.length === 0) return;

        var container = document.getElementById('__pinchzoom_viewer_container');
        if (!container) {
          container = document.createElement('div');
          container.id = '__pinchzoom_viewer_container';
          container.style.display = 'none';
          document.body.appendChild(container);
        }
        container.innerHTML = '';
        for (var i = 0; i < urls.length; i++) {
          var img = document.createElement('img');
          img.src = urls[i];
          img.setAttribute('data-original', urls[i]);
          container.appendChild(img);
        }

        currentViewer = new Viewer(container, {
          initialViewIndex: startIndex,
          navbar: urls.length > 1,
          toolbar: { zoomIn: 1, zoomOut: 1, oneToOne: 1, reset: 1, rotateLeft: 1, rotateRight: 1, prev: urls.length > 1 ? 1 : 0, next: urls.length > 1 ? 1 : 0, play: 0, flipHorizontal: 0, flipVertical: 0 },
          title: false,
          zoomRatio: 0.1,
          minZoomRatio: 0.01,
          maxZoomRatio: 10,
          movable: true,
          zoomable: true,
          rotatable: true,
          scalable: false,
          transition: true,
          fullscreen: false,
          keyboard: false,
          loop: true,
          zIndex: 99999,
          zIndexInline: 99999,
          hidden: function () { if (currentViewer) { try { currentViewer.destroy(); } catch (e) { } currentViewer = null; } }
        });
        currentViewer.view(startIndex);
      }

      // ========== 核心：强制隐藏框架查看器（兜底）==========
      function killFrameworkViewer() {
        var viewers = document.querySelectorAll(FRAMEWORK_VIEWER_SEL);
        for (var i = 0; i < viewers.length; i++) {
          var v = viewers[i];

          // 双重保险：跳过我们自己的 Viewer.js 容器及其所有子元素
          if (v.id === '__pinchzoom_viewer_container' ||
            (v.closest && v.closest('#__pinchzoom_viewer_container'))) {
            continue;
          }

          // 软屏蔽：保留 DOM 节点避免 getBoundingClientRect 报错
          v.style.position = 'fixed';
          v.style.left = '-9999px';
          v.style.top = '-9999px';
          v.style.width = '1px';
          v.style.height = '1px';
          v.style.opacity = '0';
          v.style.pointerEvents = 'none';
          v.style.zIndex = '-999';
          v.style.overflow = 'hidden';
          v.style.visibility = 'visible';
        }
        // 注意：不再单独处理 mask，因为父容器已被移出视口
      }

      // 持续监控：框架可能异步渲染查看器，用 MutationObserver 拦截
      var observer = new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
          var nodes = mutations[i].addedNodes;
          for (var j = 0; j < nodes.length; j++) {
            if (nodes[j].nodeType !== 1) continue;

            // 先排除自己的 Viewer.js 容器
            if (nodes[j].id === '__pinchzoom_viewer_container' ||
              (nodes[j].closest && nodes[j].closest('#__pinchzoom_viewer_container'))) {
              continue;
            }

            // 只用精确类名判断，不再使用 indexOf('viewer') 通配
            var cls = nodes[j].className || '';
            if (typeof cls !== 'string') cls = cls.toString();

            if (cls.indexOf('cloudpivot-mobile-h3-img-viewer') !== -1 ||
              cls.indexOf('h3think-image-viewer') !== -1) {

              var v = nodes[j];
              v.style.position = 'fixed';
              v.style.left = '-9999px';
              v.style.top = '-9999px';
              v.style.width = '1px';
              v.style.height = '1px';
              v.style.opacity = '0';
              v.style.pointerEvents = 'none';
              v.style.zIndex = '-999';
              v.style.overflow = 'hidden';
              v.style.visibility = 'visible';
            }
          }
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });

      // ========== 点击检测（pointerup 方案保留）==========
      var pointerTracker = { x: 0, y: 0, time: 0, target: null };

      document.addEventListener('pointerdown', function (e) {
        var t = e.target;
        while (t && t !== document.body) {
          if (t.classList && t.classList.contains('h3think-upload-list-photo-item') && !t.classList.contains('h3think-upload-btn')) {
            pointerTracker = { x: e.clientX, y: e.clientY, time: Date.now(), target: t };
            return;
          }
          t = t.parentNode;
        }
        pointerTracker.target = null;
      }, { capture: true, passive: true });

      document.addEventListener('pointerup', function (e) {
        if (!pointerTracker.target) return;
        var t = e.target, matchedItem = null;
        while (t && t !== document.body) {
          if (t.classList && t.classList.contains('h3think-upload-list-photo-item') && !t.classList.contains('h3think-upload-btn')) {
            matchedItem = t; break;
          }
          t = t.parentNode;
        }
        if (!matchedItem || matchedItem !== pointerTracker.target) { pointerTracker.target = null; return; }

        var dx = Math.abs(e.clientX - pointerTracker.x);
        var dy = Math.abs(e.clientY - pointerTracker.y);
        var dt = Date.now() - pointerTracker.time;
        pointerTracker.target = null;

        if (dx > 10 || dy > 10 || dt > 300) return; // 滑动跳过

        // 三重阻止
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        // 立即隐藏框架查看器（防止它在 pointerdown 阶段已经打开）
        killFrameworkViewer();

        var photos = collectGroupPhotos(matchedItem);
        if (photos.length === 0) return;
        var clickedUrl = extractBgUrl(matchedItem);
        var startIndex = 0;
        for (var i = 0; i < photos.length; i++) {
          if (photos[i].el === matchedItem || photos[i].url === clickedUrl) { startIndex = i; break; }
        }
        var urls = photos.map(function (p) { return p.url; });

        setTimeout(function () {
          killFrameworkViewer(); // 二次确认隐藏
          openViewer(startIndex, urls);
        }, 50);

        return false;
      }, { capture: true, passive: false });

      // 额外在 touchstart 阶段也做阻止（框架可能在这里触发）
      document.addEventListener('touchstart', function (e) {
        var t = e.target;
        while (t && t !== document.body) {
          if (t.classList && t.classList.contains('h3think-upload-list-photo-item') && !t.classList.contains('h3think-upload-btn')) {
            // 注意：这里不能 preventDefault，否则页面无法滚动
            // 只做标记，让 pointerup 知道这是合法目标
            return;
          }
          t = t.parentNode;
        }
      }, { capture: true, passive: true });
    }
  }

  // 手机端列表菜单颜色渲染
  if (this.isMobile) {
    if (!window.__h3SheetOptsClickBound) {
      window.__h3SheetOptsClickBound = true;

      // 列表菜单颜色渲染
      // ================= 配置区 =================
      const targetClass = '.h3think-form-sheet-page-opts';
      const sheetId = 'Sheet1731470343749'; // 你的子表 ID
      const STATUS_CLASS_MAP = {
        'OK': 'status-ok',
        'NG': 'status-ng',
        '无此点检项': 'status-none',
        '需现地确认': 'status-confirm',
        '未点检': 'status-uncheck'
      };
      // ==========================================

      // 保存当前的 this 指向（表单根实例）
      const that = this;

      // ================= 抽离的核心业务函数 =================

      // 核心 A：注入图例说明栏
      function injectLegendBar() {
        if (document.querySelector('.custom-legend-bar')) return; // 防重复
        const listHeader = document.querySelector('.page-menu-list .list-header');
        if (!listHeader) return;

        const legendHTML = `
                    <div class="custom-legend-bar">
                        <div class="legend-item">
                            <div class="sheet-row__actions__item status-ok"><span class="item_text">点检OK</span></div>
                        </div>
                        <div class="legend-item">
                            <div class="sheet-row__actions__item status-ng"><span class="item_text">点检NG</span></div>
                        </div>
                        <div class="legend-item">
                            <div class="sheet-row__actions__item status-confirm"><span class="item_text">需现地确认</span></div>
                        </div>
                        <div class="legend-item">
                            <div class="sheet-row__actions__item status-none"><span class="item_text">无此点检项</span></div>
                        </div>
                        <div class="legend-item">
                            <div class="sheet-row__actions__item status-uncheck"><span class="item_text">未点检</span></div>
                        </div>
                    </div>
                `;
        listHeader.insertAdjacentHTML('afterend', legendHTML);
      }

      // 核心 B：上色逻辑
      function applyStatusColors() {
        const container = document.querySelector('.page-index-list');
        if (!container) return;

        const actionItems = container.querySelectorAll('.sheet-row__actions__item');
        if (actionItems.length === 0) return;

        // 【修正】放弃 __vue__，直接使用闭包保存的 that (表单根实例)
        // 增加安全检查，防止 that 或数据模型未初始化时报错
        if (!that || !that.Sheet1731470343749) {
          console.warn('无法获取到表单数据模型 that.Sheet1731470343749');
          return;
        }

        const latestData = that.Sheet1731470343749.value;

        actionItems.forEach((domItem, index) => {
          // 清除旧状态
          Object.values(STATUS_CLASS_MAP).forEach(cls => domItem.classList.remove(cls));

          // 赋予新状态
          const dataItem = latestData[index];
          if (dataItem && STATUS_CLASS_MAP[dataItem.CheckedStatus]) {
            domItem.classList.add(STATUS_CLASS_MAP[dataItem.CheckedStatus]);
          }
        });
      }

      // ================= 2. 全局事件委托 + 捕获阶段 (你的原架构) =================
      document.addEventListener('click', (event) => {
        const targetEl = event.target.closest(targetClass);

        if (targetEl) {
          const sheetContainer = document.getElementById(sheetId);
          if (sheetContainer && !sheetContainer.contains(targetEl)) {
            return; // 不在该子表内，直接忽略
          }

          if (that && that.$message) {
            // 【同步极速执行】点击后立刻注入图例并上色，不等待，秒变！
            injectLegendBar();
            applyStatusColors();
          }
        }
      }, true); // <--- 保持捕获阶段 true

      // ================= 3. 轻量级初始化 (解决首次打开页面没颜色的问题) =================
      let initRetryCount = 0;
      function initRender() {
        const container = document.querySelector('.page-index-list');

        // 如果列表渲染出来了
        if (container && container.querySelectorAll('.sheet-row__actions__item').length > 0) {
          injectLegendBar();
          applyStatusColors();
        } else if (initRetryCount < 10) { // 最多重试 10 次 (约 3 秒内)
          initRetryCount++;
          setTimeout(initRender, 300); // 每 300ms 检查一次
        }
      }
      // 页面加载后延迟 300ms 开始首次检查
      setTimeout(initRender, 300);
    }
  }

  // 处于用手机发起点检状态时,可以自动点切换到下一项
  if (this.isMobile == true && this.formInEdit == true && this.workflowInfo.activityCode == "Activity2") {
    // 获取分页表中当前的下标
    function getSelectedTabIndex() {
      // 1. 获取目标容器下的所有子元素数组
      const selector = '#Sheet1731470343749 .h3think-form-sheet-action-tab .sheet-row__actions__item';
      const items = document.querySelectorAll(selector);

      if (items.length === 0) {
        console.warn('未找到对应的 Tab 元素');
        return;
      }

      // 2. 将 NodeList 转换为数组，并定位当前选中元素的下标 index
      const selectedIndex = Array.from(items).findIndex(item =>
        item.classList.contains('h3think-form-sheet-action-tab-selected')
      );

      return selectedIndex
    }

    // 手机端分页表自动点击下一项
    function clickNextSheetTab() {
      // 1. 获取目标容器下的所有子元素数组
      const selector = '#Sheet1731470343749 .h3think-form-sheet-action-tab .sheet-row__actions__item';
      const items = document.querySelectorAll(selector);

      if (items.length === 0) {
        console.warn('未找到对应的 Tab 元素');
        return;
      }

      // 2. 将 NodeList 转换为数组，并定位当前选中元素的下标 index
      const selectedIndex = Array.from(items).findIndex(item =>
        item.classList.contains('h3think-form-sheet-action-tab-selected')
      );

      // 3. 给 index + 1 的元素触发 click 事件
      if (selectedIndex !== -1) {
        const nextIndex = selectedIndex + 1;

        // 边界处理：判断 index + 1 是否越界
        if (nextIndex < items.length) {
          items[nextIndex].click();
        } else {
          // 如果当前已经是最后一个，你可以根据业务需求选择：
          // 方案 A：不处理（当前代码默认行为）
          console.log('已经是最后一个 Tab 了');

          // 方案 B：循环回到第一个（如果需要，请取消下面这行的注释）
          // items[0].click(); 
        }
      } else {
        console.warn('未找到带有选中状态 (h3think-form-sheet-action-tab-selected) 的元素');
      }
    }

    sw2 = document.getElementById('sw2-field');
    sw2.hidden = false;
    // 订阅子表点检结果
    const checkedResultSubject = this.Sheet1731470343749.getColumnValueChange('CheckedResult');
    if (checkedResultSubject) {
      checkedResultSubject.subscribe((change) => {
        // 如果列值没有变化就返回,检查undefined是用来过滤鼠标点击切换tab，也会触发事件的这个问题
        if (change.value == change.oldValue || change.oldValue.includes(undefined)) {
          return
        }
        // 判断当前处于分页表下
        const sheet_display_type_paginated = document.querySelector('.h3think-form-sheet-display-type-text')?.textContent.includes('分页表');
        // 如果用户启用该功能
        if (sw2.querySelector('#sw2-input').checked == true && sheet_display_type_paginated) {
          const selectedIndex = getSelectedTabIndex();
          const rowVlaue = change.value[selectedIndex];
          const nextValue = change.value[selectedIndex + 1];
          // 如果结果不为NG或空，以及下一项需要为空（防止连跳），才跳转
          if (rowVlaue != "NG" && rowVlaue != "" && nextValue == "") {
            clickNextSheetTab()
          }
        }
      });
    }
  }

  //产线变化时，清空数据
  this.CX.valueChange.subscribe((change) => {
    //车型清空
    this.CheXing.value = "";
    //区域清空
    this.QY.value = "";
    //工程清空
    this.GC.value = "";
    //岗位清空
    this.GW.value = "";
  });
  //区域变化时，清空数据
  this.QY.valueChange.subscribe((change) => {
    //工程清空
    this.GC.value = "";
    //岗位清空
    this.GW.value = "";
  });
  //工程变化时，清空数据
  this.GC.valueChange.subscribe((change) => {
    //岗位清空
    this.GW.value = "";
  });
  // 关联单选使用API拉取手册数据，修复原数据映射不成功的问题
  this.RelevanceForm1731477824787.valueChange.subscribe((change) => {
    if (change.value != null) {
      var closeLoading = this.$message.loading('加载中', 0);
      let id = change.value.id;
      getFormData(axios, id, "MDL202411139838")
        .then(data => {
          const sheet = data.Sheet1731477722482;
          // this.Sheet1731470343749.removeAllRow();
          // this.Sheet1731470343749.appendRows(sheet);
          this.Sheet1731470343749.value = sheet;
          closeLoading();
        })
        .catch(error => {
          closeLoading();
          this.$message.error('抓取手册失败，请刷新页面重试');
          console.log("抓取手册失败:", error);

        });

    }
  });



  // 手机端子表编辑状态优化，除了一开始点检可以新增行，其他流程节点不能新增行
  const activityCodeList = ["Activity3", "Activity5", "Activity6"]
  if (activityCodeList.includes(this.workflowInfo.activityCode)) {
    if (this.isMobile == false) {
      if (this.formInEdit == true) {
        // 子表标题栏新增按钮
        let sheetNewRowBtn = document.querySelector('#Sheet1731470343749 .ant-btn.ant-btn-primary');
        if (sheetNewRowBtn) {
          sheetNewRowBtn.style = "display:none";
        }
        // 子表标题栏删除按钮
        let sheetDeleteRowBtn = document.querySelector('#Sheet1731470343749 .anticon.anticon-delete');
        if (sheetDeleteRowBtn) {
          sheetDeleteRowBtn.parentNode.style = "display:none";
        }
      }
    } else {
      if (this.formInEdit == true) {
        // 子表式样选择
        let displaytype = document.querySelector('#Sheet1731470343749 .h3think-form-sheet-display-type');
        if (displaytype) {
          displaytype.style = "display:none";
        }
        // 子表标题栏新增按钮
        let sheetNewRowBtn1 = document.querySelector('#Sheet1731470343749 .h3think-form-sheet-add-rows');
        if (sheetNewRowBtn1) {
          sheetNewRowBtn1.style = "display:none";
        }
        // 子表行菜单
        let sheetRowOpts = document.querySelector('#Sheet1731470343749 .h3think-form-sheet-row-opts');
        if (sheetRowOpts) {
          sheetRowOpts.style = "display:none";
        }
        // 子表底栏新增按钮
        let sheetNewRowBtn2 = document.querySelector('#Sheet1731470343749 .h3think-form-sheet-panel .h3think-form-sheet-add-rows');
        if (sheetNewRowBtn2) {
          sheetNewRowBtn2.style = "display:none";
        }
      }
    }
  }

  // 流程处于“发起人效果确认”节点时，如果未全部NG问题进行确认，则不能提交
  if (this.workflowInfo && this.workflowInfo.activityCode == "Activity6" && this.formInEdit == true) {
    // 监听“效果确认”的值
    this.Sheet1731470343749.getColumnValueChange('confirmTheRectificationEffec').subscribe((change) => {
      if (change && this.Sheet1731470343749.value) {
        console.log('confirmTheRectificationEffec.change', change);
        let chackResultHasNG = false; //检查结果有NG
        for (let row of this.Sheet1731470343749.value) {
          if (row.CheckedResult == 'NG' && row.confirmTheRectificationEffec != 'OK') {
            chackResultHasNG = true;
            break;
          }
        }
        if (chackResultHasNG) {
          bm.actionBtnDisplay(ActionCodes.AGREE, false);//隐藏同意按钮
          this.$message.error('存在未确认OK的问题点，不能同意');
        } else {
          bm.actionBtnDisplay(ActionCodes.AGREE, true);//显示同意按钮
        }
      }
    });
  }

  // 监听点检结果变化
  const CheckedResultChange = this.Sheet1731470343749.getColumnValueChange('CheckedResult');
  if (CheckedResultChange) {
    CheckedResultChange.subscribe((change) => {
      if (change.value && change.value[change.index] == "NG") {
      });
  }

  // 监听NG类型变化
  const NGTypeChange = this.Sheet1731470343749.getColumnValueChange('NGType');
  if (NGTypeChange) {
    NGTypeChange.subscribe((change) => {

    });
  }


  // 获取当前页面的URL对象
  // const url = new URL(window.location.href);
  // 获取URL的查询字符串部分，并创建一个URLSearchParams对象
  // const params = new URLSearchParams(url.search);
  // 检查是否存在名为'extraProperties'的参数
  // if (params.has('extraProperties')) {
  //     // 获取'extraProperties'参数的值
  //     const extraPropertiesStr = params.get('extraProperties');
  //     console.log(extraPropertiesStr);

  //     try {
  //         // 尝试将字符串转换为JSON对象
  //         const extraPropertiesObj = JSON.parse(extraPropertiesStr);
  //         // 现在你可以像操作普通JavaScript对象一样操作extraPropertiesObj
  //         console.log(extraPropertiesObj);
  //         //产线
  //         this.CX.value = extraPropertiesObj["产线"];
  //         //车型
  //         this.CheXing.value = extraPropertiesObj["车型"];
  //         //区域
  //         this.QY.value = extraPropertiesObj["区域"];
  //         //工程
  //         this.GC.value = extraPropertiesObj["工程"];
  //         //岗位
  //         this.GW.value = extraPropertiesObj["岗位"];

  //     } catch (error) {
  //         // 如果解析失败（例如，因为字符串不是有效的JSON），则处理错误
  //         console.error('Failed to parse extraProperties as JSON:', error);
  //     }
  // } else {
  //     // 如果'extraProperties'参数不存在，则执行其他逻辑（可选）
  //     // console.log('No extraProperties parameter found.');
  // }

  // 记录子表是否有新增行
  // this.Sheet1731470343749.rowChange.subscribe(function (change) {
  //     if (change.type === 'insert') {  //新增行
  //         console.log(change.type);
  //         Sheet1731470343749RowHasChange = true;
  //     }
  // })
  // var closeLoading;
  // sw1 = document.getElementById('sw1-field');

  // try {
  //     import('https://cdn.jsdelivr.net/npm/cloudpivot-sheet-filter@1.0.11/+esm')
  //         .then(({ default: sheetFilter, FilterOperators }) => {
  //             sheetF = new sheetFilter(); //子表筛选类实例化
  //             sheetF.addFilter('CheckedResult', FilterOperators.EQ, 'NG'); //添加筛选点条件：检结果等于NG

  //             //流程不等于表单填写
  //             if (this.workflowInfo.activityCode == "Activity2") {
  //                 if (this.formInEdit == true) {
  //                     sw1.hidden = true; //“仅看NG项”按钮隐藏
  //                 }
  //             } else {
  //                 let previewResult = sheetF.previewFilter(this.Sheet1731470343749);
  //                 console.log("previewResult: ", previewResult);
  //                 if (previewResult != null) {
  //                     sw1.hidden = false;
  //                     // closeLoading = this.$message.loading('列表加载中'); //显示加载中的信息框
  //                     // sheetF.applyFilter(this.Sheet1731470343749, previewResult);
  //                     // closeLoading(); //关闭加载中的信息框
  //                     // sw1.querySelector('#sw1-input').checked = true;
  //                 } else {
  //                     sw1.hidden = true;
  //                 }

  //                 // 监听开关状态
  //                 ['sw1-input'].forEach(id => {
  //                     document.getElementById(id).addEventListener('change', e => {
  //                         console.log(`${id} 状态：${e.target.checked}`);
  //                         if (id == "sw1-input") {
  //                             if (e.target.checked == true) {
  //                                 closeLoading = this.$message.loading('列表加载中'); //显示加载中的信息框
  //                                 sheetF.filter(this.Sheet1731470343749, true);
  //                                 closeLoading(); //关闭加载中的信息框
  //                             } else {
  //                                 closeLoading = this.$message.loading('列表加载中'); //显示加载中的信息框
  //                                 sheetF.filter(this.Sheet1731470343749, false);
  //                                 closeLoading(); //关闭加载中的信息框
  //                             }
  //                         }
  //                     });
  //                 });
  //             }
  //         });
  // } catch (error) {
  //     console.error(error);
  // }

});
//内置校验完成后，返回false阻止提交
form.on('onValidate', function (action, data) {
  // if(Sheet1731470343749RowHasChange){
  //     var closeLoading = this.$message.loading('保存中，请勿关闭', 0);
  //     const activityCodeArray = ["Activity2", "Activity3", "Activity5", "Activity6"];
  //     fixSheetData(this.Sheet1731470343749, activityCodeArray, action, this.workflowInfo);
  //     closeLoading();
  // }

  // 取消筛选才能提交单据，否则被筛选的数据会丢失。
  // if (sheetF.isFiltered()) {
  //     sheetF.cancelFilter(this.Sheet1731470343749);
  //     sw1.querySelector('#sw1-input').checked = false;
  //     if (sheetF.isFiltered()) {
  //         this.$message.error('取消筛选失败');
  //         return false;
  //     }
  // }

  // 发起人效果确认，阻止未全部问题确认OK的单据提交
  if (this.workflowInfo && this.workflowInfo.activityCode == "Activity6" && this.Sheet1731470343749.value) {
    for (let row of this.Sheet1731470343749.value) {
      if (row.CheckedResult == 'NG' && row.confirmTheRectificationEffec != 'OK') {
        this.$message.error('存在未确认OK的问题点，不能同意');
        return false;
      }
    }
  }
});
//操作前（包含自定义按钮）执行，返回false阻止按钮操作
form.on('onPreAction', function (action, data) {
  // 同意、驳回、暂存时，取消筛选
  // if (action.code == ActionCodes.SHOW_REJECT || action.code == ActionCodes.AGREE || action.code == ActionCodes.SAVE) {
  //     sheetF.filter(this.Sheet1731470343749, false);
  // }
  // sheetF.cancelFilter(this.Sheet1731470343749);
});
//自定义按钮执行
form.on('onCustomAction', function (action, data) { });
//操作完成后执行
form.on('onActionDone', function (action, data, httpRes) { });
