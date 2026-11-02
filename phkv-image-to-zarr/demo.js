var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// <define:__REFKV_PROFILES__>
var define_REFKV_PROFILES_default;
var init_define_REFKV_PROFILES = __esm({
  "<define:__REFKV_PROFILES__>"() {
    define_REFKV_PROFILES_default = [{ name: "czi", title: "CZI", uuid: "7a0733c7-d4be-4482-a64f-6904d9354ea5", version: 0, kind: "file", sniff: 50, chosen_by: null, suffixes: [".czi"], reference: 20, source: "Zeiss CZI", inputs: "Zeiss CZI files (ZISRAW, file version 1), with uncompressed, JPEG, JPEG XR and Zstd subblocks, mosaics and pyramids", for: "Zeiss CZI files" }, { name: "dicom", title: "DICOM", uuid: "acf17198-e5a5-48d3-8187-22ec4bb40ea5", version: 0, kind: "file", sniff: 10, chosen_by: null, suffixes: [".dcm"], reference: 25, source: "DICOM", inputs: "DICOM Part 10 files with native, JPEG, lossless JPEG or JPEG 2000 pixel data, including whole-slide images", for: "DICOM files, including whole-slide images" }, { name: "fits", title: "FITS", uuid: "4b0d3a7e-1c52-4f6a-9b8e-2d7f0c6a1e93", version: 0, kind: "file", sniff: 110, chosen_by: null, suffixes: [".fits", ".fz"], reference: null, source: "FITS", inputs: "FITS files: images, multi-extension files, binary and ASCII tables", for: "FITS images and tables (`.fits`, `.fz`)" }, { name: "flac", title: "FLAC", uuid: "e9108d07-b24b-432f-a8ce-09d80c8073b4", version: 0, kind: "file", sniff: 95, chosen_by: null, suffixes: [".flac"], reference: null, source: "FLAC (Free Lossless Audio Codec)", inputs: "FLAC files (`.flac`) of a fixed block size, with their metadata blocks and ID3v2 and ID3v1 tags; one sharded array of integer samples, not an image", for: "FLAC audio files, as a sharded array of samples (`.flac`)" }, { name: "grib", title: "GRIB", uuid: "c9bbe039-8dfa-49f9-a655-756f822a42d6", version: 0, kind: "file", sniff: 65, chosen_by: null, suffixes: [".grib2", ".grb2"], reference: null, source: "WMO FM 92 GRIB edition 2 (WMO-No. 306, Manual on Codes, Volume I.2)", inputs: "GRIB edition 2 files of gridded fields, such as NOAA's and ECMWF's forecasts, whose regular latitude/longitude and Lambert conformal fields it presents", for: "GRIB2 files of gridded weather and climate fields (`.grib2`), as labeled arrays with CF coordinates" }, { name: "hdf5", title: "HDF5", uuid: "6c006834-424b-451b-b786-f8c502ec32af", version: 0, kind: "file", sniff: 70, chosen_by: null, suffixes: [".h5", ".nwb"], reference: null, source: "HDF5, NWB", inputs: "HDF5 files, NWB files first among them: every group, dataset, attribute, link and object reference the profile can present, in hdmf-zarr's Zarr v3 form", for: "HDF5 files (`.h5`, `.hdf5`), and NWB files (`.nwb`), which pynwb's `NWBZarrIO` opens" }, { name: "ims", title: "IMS", uuid: "5067a535-8261-4b25-a93c-1985ed333bde", version: 0, kind: "file", sniff: null, chosen_by: "hdf5", suffixes: [".ims"], reference: 25, source: "Imaris IMS", inputs: "Imaris IMS files (HDF5)", for: "Imaris `.ims` files" }, { name: "lif", title: "LIF", uuid: "b099ab1f-f9d4-4276-9006-9ff1193a34b2", version: 0, kind: "file", sniff: 55, chosen_by: null, suffixes: [".lif"], reference: null, source: "Leica LIF", inputs: "Leica LIF files (LAS X and LAS AF, versions 1 and 2): every image of the file's element tree, with interleaved or planar channels, z-stacks, time series and mosaics, uncompressed", for: "Leica LIF files (`.lif`)" }, { name: "mp3", title: "MP3", uuid: "b6cb0047-9448-4fdc-b03e-10dd3d6aa829", version: 0, kind: "file", sniff: 100, chosen_by: null, suffixes: [".mp3"], reference: null, source: "MP3 (MPEG Layer III audio)", inputs: "MPEG-1, MPEG-2 and MPEG-2.5 Layer III audio files (`.mp3`), with their ID3v2, ID3v1 and APE tags; one array of samples, not an image", for: "MP3 audio files, as an array of samples (`.mp3`)" }, { name: "mp4", title: "MP4", uuid: "bbe3f6b9-488d-4d8d-85ce-60a1649dd27e", version: 0, kind: "file", sniff: 85, chosen_by: null, suffixes: [".mp4", ".mov"], reference: null, source: "MP4 and QuickTime (H.264 and HEVC video, AAC and MP3 audio)", inputs: "MP4 and QuickTime files (`.mp4`, `.m4a`, `.m4v`, `.mov`) with H.264 or HEVC video and AAC or MP3 audio tracks; a group per track, not an image", for: "MP4 and QuickTime video and audio, as arrays of planes and samples (`.mp4`, `.m4a`, `.m4v`, `.mov`)" }, { name: "mrc", title: "MRC", uuid: "2aacd010-2ed1-4748-bc3c-5dd5e840bbce", version: 0, kind: "file", sniff: 90, chosen_by: null, suffixes: [".mrc"], reference: null, source: "MRC2014", inputs: "MRC2014 files (CCP4 maps, image stacks, volumes and volume stacks)", for: "MRC2014 maps, image stacks, volumes and volume stacks (`.mrc`, `.map`)" }, { name: "mrc-dataset", title: "MRC dataset", uuid: "f139bf4e-7bab-4c3c-9b2d-66ba747f9b93", version: 0, kind: "layout", sniff: null, chosen_by: null, suffixes: [], reference: null, source: "MRC2014, as a dataset", inputs: "", for: "" }, { name: "n5", title: "N5", uuid: "ad5d4c39-c69e-48f7-a3ef-4cc8c607d416", version: 0, kind: "store", sniff: null, chosen_by: null, suffixes: [], reference: 25, source: "N5", inputs: "N5 containers, default-mode blocks", for: "N5 containers on S3" }, { name: "nd2", title: "ND2", uuid: "59612f14-e314-4207-ba00-8f422ba71490", version: 0, kind: "file", sniff: 20, chosen_by: null, suffixes: [".nd2"], reference: 20, source: "Nikon ND2", inputs: "Nikon ND2, format version 3 and later", for: "Nikon NIS-Elements ND2 files" }, { name: "ndpi", title: "NDPI", uuid: "6cac71ef-dbb2-4acd-b60c-00389aa4238a", version: 0, kind: "file", sniff: null, chosen_by: "tiff", suffixes: [".ndpi"], reference: 25, source: "Hamamatsu NDPI", inputs: "Hamamatsu NDPI slides, a TIFF variant with 64-bit offsets", for: "Hamamatsu NDPI whole-slide images" }, { name: "nifti", title: "NIfTI", uuid: "06e5809d-4d54-4b72-afd0-6bf61a7b4c85", version: 0, kind: "file", sniff: 60, chosen_by: null, suffixes: [".nii"], reference: 25, source: "NIfTI-1 and NIfTI-2", inputs: "NIfTI-1 and NIfTI-2 single files (`.nii`)", for: "NIfTI-1 and NIfTI-2 volumes (`.nii`)" }, { name: "npy", title: "NumPy", uuid: "62b1d1ba-8eb3-465c-a333-75e096fce519", version: 0, kind: "file", sniff: 75, chosen_by: null, suffixes: [".npy", ".npz"], reference: null, source: "NumPy NPY and NPZ (NEP 1)", inputs: "NumPy `.npy` files, and `.npz` archives of them (`np.savez`, `np.savez_compressed`), whose stored and deflated members it presents", for: "NumPy arrays: `.npy` files, and the arrays of `.npz` archives, stored or deflated" }, { name: "nrrd", title: "NRRD", uuid: "23e0c600-8da6-40f1-81e7-ab246e948e88", version: 0, kind: "file", sniff: 95, chosen_by: null, suffixes: [".nhdr", ".nrrd"], reference: null, source: "NRRD (Teem)", inputs: "NRRD files (`.nrrd`) and detached headers with one data file (`.nhdr`), raw or gzip-encoded", for: "NRRD volumes, attached or detached, raw or gzip (`.nrrd`, `.nhdr`)" }, { name: "ome-zarr", title: "OME-Zarr", uuid: "b74ea302-65bb-49ae-b81f-f9bb52cd4eed", version: 0, kind: "store", sniff: null, chosen_by: null, suffixes: [], reference: 25, source: "OME-Zarr 0.4", inputs: "OME-Zarr 0.4 hierarchies on Zarr v2, migrated to OME-Zarr 0.5", for: "OME-Zarr 0.4 hierarchies, migrated to OME-Zarr 0.5 in place" }, { name: "qptiff", title: "QPTIFF", uuid: "329ea136-2f55-4c27-b6f4-8e60ca2109b8", version: 0, kind: "file", sniff: null, chosen_by: "tiff", suffixes: [".qptiff"], reference: null, source: "Akoya QPTIFF", inputs: "Akoya (PerkinElmer) Vectra QPTIFF slides and inForm component data, a TIFF with an XML description per image, in LZW, JPEG or uncompressed tiles or strips", for: "Akoya (PerkinElmer) Vectra multiplex scans and inForm component data" }, { name: "safe", title: "Sentinel-2 SAFE", uuid: "ef81346c-19e8-42ad-93b0-a279ccaf44c1", version: 0, kind: "both", sniff: 80, chosen_by: null, suffixes: [".zip"], reference: 25, source: "Sentinel-2 SAFE (Level-1C, Level-2A)", inputs: "Sentinel-2 Level-1C and Level-2A products: a `.SAFE` directory (a store) or a `.SAFE.zip` file", for: "Sentinel-2 Level-1C and Level-2A products, as a `.SAFE` directory or a `.SAFE.zip`" }, { name: "safetensors", title: "safetensors", uuid: "15e7ce39-d4ca-4514-8144-6e19d2a0341b", version: 0, kind: "both", sniff: 35, chosen_by: null, suffixes: [".safetensors"], reference: null, source: "safetensors (Hugging Face)", inputs: "safetensors files of a model's tensors (`model.safetensors`), in every data type the library defines, `BF16`, `F8_*`, `F4` and `F6_*` included; and stores of them, such as a model's repository of shards with its index", for: "machine learning model weights in safetensors files (`.safetensors`), each tensor an array, and a model's shards as one group" }, { name: "tiff", title: "TIFF", uuid: "48e9ac4e-1156-4a62-955e-20467d9c2700", version: 0, kind: "file", sniff: 40, chosen_by: null, suffixes: [".tif"], reference: 20, source: "TIFF, OME-TIFF, Aperio SVS", inputs: "TIFF and BigTIFF, including OME-TIFF and JPEG-tiled slides such as Aperio SVS", for: "OME-TIFF, plain TIFF (tiled or in strips), and JPEG-tiled slides such as Aperio SVS" }, { name: "vsi", title: "VSI", uuid: "c0a1d4e6-5b7f-4f3a-9c2d-8e1f6a7b3c45", version: 0, kind: "file", sniff: 30, chosen_by: null, suffixes: [".vsi"], reference: null, source: "Olympus VSI", inputs: "Olympus cellSens VSI slides: a `.vsi` file and the tile files beside it, probed by key (uncompressed, JPEG, JPEG 2000 and lossless JPEG tiles)", for: "Olympus cellSens whole-slide images (`.vsi` with its tile files)" }, { name: "zarr2", title: "Zarr v2", uuid: "8e792619-d671-4687-ab51-752885dd3ee6", version: 0, kind: "store", sniff: null, chosen_by: null, suffixes: [], reference: 25, source: "Zarr v2", inputs: "Zarr v2 hierarchies", for: "Zarr v2 hierarchies on S3" }];
  }
});

// node_modules/highlight.js/lib/core.js
var require_core = __commonJS({
  "node_modules/highlight.js/lib/core.js"(exports, module3) {
    init_define_REFKV_PROFILES();
    function deepFreeze(obj) {
      if (obj instanceof Map) {
        obj.clear = obj.delete = obj.set = function() {
          throw new Error("map is read-only");
        };
      } else if (obj instanceof Set) {
        obj.add = obj.clear = obj.delete = function() {
          throw new Error("set is read-only");
        };
      }
      Object.freeze(obj);
      Object.getOwnPropertyNames(obj).forEach((name) => {
        const prop = obj[name];
        const type = typeof prop;
        if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
          deepFreeze(prop);
        }
      });
      return obj;
    }
    var Response2 = class {
      /**
       * @param {CompiledMode} mode
       */
      constructor(mode) {
        if (mode.data === void 0) mode.data = {};
        this.data = mode.data;
        this.isMatchIgnored = false;
      }
      ignoreMatch() {
        this.isMatchIgnored = true;
      }
    };
    function escapeHTML(value) {
      return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    }
    function inherit$1(original, ...objects) {
      const result = /* @__PURE__ */ Object.create(null);
      for (const key in original) {
        result[key] = original[key];
      }
      objects.forEach(function(obj) {
        for (const key in obj) {
          result[key] = obj[key];
        }
      });
      return (
        /** @type {T} */
        result
      );
    }
    var SPAN_CLOSE = "</span>";
    var emitsWrappingTags = (node) => {
      return !!node.scope;
    };
    var scopeToCSSClass = (name, { prefix: prefix2 }) => {
      if (name.startsWith("language:")) {
        return name.replace("language:", "language-");
      }
      if (name.includes(".")) {
        const pieces = name.split(".");
        return [
          `${prefix2}${pieces.shift()}`,
          ...pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`)
        ].join(" ");
      }
      return `${prefix2}${name}`;
    };
    var HTMLRenderer = class {
      /**
       * Creates a new HTMLRenderer
       *
       * @param {Tree} parseTree - the parse tree (must support `walk` API)
       * @param {{classPrefix: string}} options
       */
      constructor(parseTree, options) {
        this.buffer = "";
        this.classPrefix = options.classPrefix;
        parseTree.walk(this);
      }
      /**
       * Adds texts to the output stream
       *
       * @param {string} text */
      addText(text) {
        this.buffer += escapeHTML(text);
      }
      /**
       * Adds a node open to the output stream (if needed)
       *
       * @param {Node} node */
      openNode(node) {
        if (!emitsWrappingTags(node)) return;
        const className = scopeToCSSClass(
          node.scope,
          { prefix: this.classPrefix }
        );
        this.span(className);
      }
      /**
       * Adds a node close to the output stream (if needed)
       *
       * @param {Node} node */
      closeNode(node) {
        if (!emitsWrappingTags(node)) return;
        this.buffer += SPAN_CLOSE;
      }
      /**
       * returns the accumulated buffer
      */
      value() {
        return this.buffer;
      }
      // helpers
      /**
       * Builds a span element
       *
       * @param {string} className */
      span(className) {
        this.buffer += `<span class="${className}">`;
      }
    };
    var newNode = (opts = {}) => {
      const result = { children: [] };
      Object.assign(result, opts);
      return result;
    };
    var TokenTree = class _TokenTree {
      constructor() {
        this.rootNode = newNode();
        this.stack = [this.rootNode];
      }
      get top() {
        return this.stack[this.stack.length - 1];
      }
      get root() {
        return this.rootNode;
      }
      /** @param {Node} node */
      add(node) {
        this.top.children.push(node);
      }
      /** @param {string} scope */
      openNode(scope) {
        const node = newNode({ scope });
        this.add(node);
        this.stack.push(node);
      }
      closeNode() {
        if (this.stack.length > 1) {
          return this.stack.pop();
        }
        return void 0;
      }
      closeAllNodes() {
        while (this.closeNode()) ;
      }
      toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
      }
      /**
       * @typedef { import("./html_renderer").Renderer } Renderer
       * @param {Renderer} builder
       */
      walk(builder) {
        return this.constructor._walk(builder, this.rootNode);
      }
      /**
       * @param {Renderer} builder
       * @param {Node} node
       */
      static _walk(builder, node) {
        if (typeof node === "string") {
          builder.addText(node);
        } else if (node.children) {
          builder.openNode(node);
          node.children.forEach((child) => this._walk(builder, child));
          builder.closeNode(node);
        }
        return builder;
      }
      /**
       * @param {Node} node
       */
      static _collapse(node) {
        if (typeof node === "string") return;
        if (!node.children) return;
        if (node.children.every((el) => typeof el === "string")) {
          node.children = [node.children.join("")];
        } else {
          node.children.forEach((child) => {
            _TokenTree._collapse(child);
          });
        }
      }
    };
    var TokenTreeEmitter = class extends TokenTree {
      /**
       * @param {*} options
       */
      constructor(options) {
        super();
        this.options = options;
      }
      /**
       * @param {string} text
       */
      addText(text) {
        if (text === "") {
          return;
        }
        this.add(text);
      }
      /** @param {string} scope */
      startScope(scope) {
        this.openNode(scope);
      }
      endScope() {
        this.closeNode();
      }
      /**
       * @param {Emitter & {root: DataNode}} emitter
       * @param {string} name
       */
      __addSublanguage(emitter, name) {
        const node = emitter.root;
        if (name) node.scope = `language:${name}`;
        this.add(node);
      }
      toHTML() {
        const renderer = new HTMLRenderer(this, this.options);
        return renderer.value();
      }
      finalize() {
        this.closeAllNodes();
        return true;
      }
    };
    function source(re) {
      if (!re) return null;
      if (typeof re === "string") return re;
      return re.source;
    }
    function lookahead(re) {
      return concat("(?=", re, ")");
    }
    function anyNumberOfTimes(re) {
      return concat("(?:", re, ")*");
    }
    function optional(re) {
      return concat("(?:", re, ")?");
    }
    function concat(...args) {
      const joined = args.map((x) => source(x)).join("");
      return joined;
    }
    function stripOptionsFromArgs(args) {
      const opts = args[args.length - 1];
      if (typeof opts === "object" && opts.constructor === Object) {
        args.splice(args.length - 1, 1);
        return opts;
      } else {
        return {};
      }
    }
    function either(...args) {
      const opts = stripOptionsFromArgs(args);
      const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
      return joined;
    }
    function countMatchGroups(re) {
      return new RegExp(re.toString() + "|").exec("").length - 1;
    }
    function startsWith(re, lexeme) {
      const match = re && re.exec(lexeme);
      return match && match.index === 0;
    }
    var BACKREF_RE = new RegExp(either(
      /\[(?:[^\\\]]|\\.)*\]/,
      // a character class, inside which ( and \ lose their meaning
      /\(\?<(?![=!])[^>]+>/,
      // a named capture group `(?<name>` (not a lookbehind `(?<=` / `(?<!`)
      /\(\?'[^']+'/,
      // a named capture group `(?'name'`
      /\(\??/,
      // an opening parenthesis, capturing or non-capturing / lookahead
      /\\([1-9][0-9]*)/,
      // a backreference like `\1`
      /\\./
      // any other escape sequence
    ));
    function _rewriteBackreferences(regexps, { joinWith }) {
      let numCaptures = 0;
      return regexps.map((regex) => {
        numCaptures += 1;
        const offset = numCaptures;
        let re = source(regex);
        let out2 = "";
        while (re.length > 0) {
          const match = BACKREF_RE.exec(re);
          if (!match) {
            out2 += re;
            break;
          }
          out2 += re.substring(0, match.index);
          re = re.substring(match.index + match[0].length);
          if (match[0][0] === "\\" && match[1]) {
            out2 += "\\" + String(Number(match[1]) + offset);
          } else {
            out2 += match[0];
            if (match[0] === "(" || /^\(\?[<']/.test(match[0])) {
              numCaptures++;
            }
          }
        }
        return out2;
      }).map((re) => `(${re})`).join(joinWith);
    }
    var MATCH_NOTHING_RE = /\b\B/;
    var IDENT_RE = "[a-zA-Z]\\w*";
    var UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
    var NUMBER_RE = "\\b\\d+(\\.\\d+)?";
    var C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
    var BINARY_NUMBER_RE = "\\b(0b[01]+)";
    var RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    var SHEBANG = (opts = {}) => {
      const beginShebang = /^#![ ]*\//;
      if (opts.binary) {
        opts.begin = concat(
          beginShebang,
          /.*\b/,
          opts.binary,
          /\b.*/
        );
      }
      return inherit$1({
        scope: "meta",
        begin: beginShebang,
        end: /$/,
        relevance: 0,
        /** @type {ModeCallback} */
        "on:begin": (m, resp) => {
          if (m.index !== 0) resp.ignoreMatch();
        }
      }, opts);
    };
    var BACKSLASH_ESCAPE = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    };
    var APOS_STRING_MODE = {
      scope: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [BACKSLASH_ESCAPE]
    };
    var QUOTE_STRING_MODE = {
      scope: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [BACKSLASH_ESCAPE]
    };
    var PHRASAL_WORDS_MODE = {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    };
    var COMMENT = function(begin, end, modeOptions = {}) {
      const mode = inherit$1(
        {
          scope: "comment",
          begin,
          end,
          contains: []
        },
        modeOptions
      );
      mode.contains.push({
        scope: "doctag",
        // hack to avoid the space from being included. the space is necessary to
        // match here to prevent the plain text rule below from gobbling up doctags
        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: true,
        relevance: 0
      });
      const ENGLISH_WORD = either(
        // list of common 1 and 2 letter words in English
        "I",
        "a",
        "is",
        "so",
        "us",
        "to",
        "at",
        "if",
        "in",
        "it",
        "on",
        // note: this is not an exhaustive list of contractions, just popular ones
        /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
        // contractions - can't we'd they're let's, etc
        /[A-Za-z]+[-][a-z]+/,
        // `no-way`, etc.
        /[A-Za-z][a-z]{2,}/
        // allow capitalized words at beginning of sentences
      );
      mode.contains.push(
        {
          // TODO: how to include ", (, ) without breaking grammars that use these for
          // comment delimiters?
          // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
          // ---
          // this tries to find sequences of 3 english words in a row (without any
          // "programming" type syntax) this gives us a strong signal that we've
          // TRULY found a comment - vs perhaps scanning with the wrong language.
          // It's possible to find something that LOOKS like the start of the
          // comment - but then if there is no readable text - good chance it is a
          // false match and not a comment.
          //
          // for a visual example please see:
          // https://github.com/highlightjs/highlight.js/issues/2827
          begin: concat(
            /[ ]+/,
            // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
            "(",
            ENGLISH_WORD,
            /[.]?[:]?([.][ ]|[ ])/,
            "){3}"
          )
          // look for 3 words in a row
        }
      );
      return mode;
    };
    var C_LINE_COMMENT_MODE = COMMENT("//", "$");
    var C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
    var HASH_COMMENT_MODE = COMMENT("#", "$");
    var NUMBER_MODE = {
      scope: "number",
      begin: NUMBER_RE,
      relevance: 0
    };
    var C_NUMBER_MODE = {
      scope: "number",
      begin: C_NUMBER_RE,
      relevance: 0
    };
    var BINARY_NUMBER_MODE = {
      scope: "number",
      begin: BINARY_NUMBER_RE,
      relevance: 0
    };
    var REGEXP_MODE = {
      scope: "regexp",
      begin: /\/(?=[^/\n]*\/)/,
      end: /\/[gimuy]*/,
      contains: [
        BACKSLASH_ESCAPE,
        {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [BACKSLASH_ESCAPE]
        }
      ]
    };
    var TITLE_MODE = {
      scope: "title",
      begin: IDENT_RE,
      relevance: 0
    };
    var UNDERSCORE_TITLE_MODE = {
      scope: "title",
      begin: UNDERSCORE_IDENT_RE,
      relevance: 0
    };
    var METHOD_GUARD = {
      // excludes method names from keyword processing
      begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
      relevance: 0
    };
    var END_SAME_AS_BEGIN = function(mode) {
      return Object.assign(
        mode,
        {
          /** @type {ModeCallback} */
          "on:begin": (m, resp) => {
            resp.data._beginMatch = m[1];
          },
          /** @type {ModeCallback} */
          "on:end": (m, resp) => {
            if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
          }
        }
      );
    };
    var MODES = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      APOS_STRING_MODE,
      BACKSLASH_ESCAPE,
      BINARY_NUMBER_MODE,
      BINARY_NUMBER_RE,
      COMMENT,
      C_BLOCK_COMMENT_MODE,
      C_LINE_COMMENT_MODE,
      C_NUMBER_MODE,
      C_NUMBER_RE,
      END_SAME_AS_BEGIN,
      HASH_COMMENT_MODE,
      IDENT_RE,
      MATCH_NOTHING_RE,
      METHOD_GUARD,
      NUMBER_MODE,
      NUMBER_RE,
      PHRASAL_WORDS_MODE,
      QUOTE_STRING_MODE,
      REGEXP_MODE,
      RE_STARTERS_RE,
      SHEBANG,
      TITLE_MODE,
      UNDERSCORE_IDENT_RE,
      UNDERSCORE_TITLE_MODE
    });
    function skipIfHasPrecedingDot(match, response) {
      const before2 = match.input[match.index - 1];
      if (before2 === ".") {
        response.ignoreMatch();
      }
    }
    function scopeClassName(mode, _parent) {
      if (mode.className !== void 0) {
        mode.scope = mode.className;
        delete mode.className;
      }
    }
    function beginKeywords(mode, parent) {
      if (!parent) return;
      if (!mode.beginKeywords) return;
      mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
      mode.__beforeBegin = skipIfHasPrecedingDot;
      mode.keywords = mode.keywords || mode.beginKeywords;
      delete mode.beginKeywords;
      if (mode.relevance === void 0) mode.relevance = 0;
    }
    function compileIllegal(mode, _parent) {
      if (!Array.isArray(mode.illegal)) return;
      mode.illegal = either(...mode.illegal);
    }
    function compileMatch(mode, _parent) {
      if (!mode.match) return;
      if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
      mode.begin = mode.match;
      delete mode.match;
    }
    function compileRelevance(mode, _parent) {
      if (mode.relevance === void 0) mode.relevance = 1;
    }
    var beforeMatchExt = (mode, parent) => {
      if (!mode.beforeMatch) return;
      if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
      const originalMode = Object.assign({}, mode);
      Object.keys(mode).forEach((key) => {
        delete mode[key];
      });
      mode.keywords = originalMode.keywords;
      mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
      mode.starts = {
        relevance: 0,
        contains: [
          Object.assign(originalMode, { endsParent: true })
        ]
      };
      mode.relevance = 0;
      delete originalMode.beforeMatch;
    };
    var COMMON_KEYWORDS = [
      "of",
      "and",
      "for",
      "in",
      "not",
      "or",
      "if",
      "then",
      "parent",
      // common variable name
      "list",
      // common variable name
      "value"
      // common variable name
    ];
    var DEFAULT_KEYWORD_SCOPE = "keyword";
    function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
      const compiledKeywords = /* @__PURE__ */ Object.create(null);
      if (typeof rawKeywords === "string") {
        compileList(scopeName, rawKeywords.split(" "));
      } else if (Array.isArray(rawKeywords)) {
        compileList(scopeName, rawKeywords);
      } else {
        Object.keys(rawKeywords).forEach(function(scopeName2) {
          Object.assign(
            compiledKeywords,
            compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
          );
        });
      }
      return compiledKeywords;
      function compileList(scopeName2, keywordList) {
        if (caseInsensitive) {
          keywordList = keywordList.map((x) => x.toLowerCase());
        }
        keywordList.forEach(function(keyword) {
          const pair = keyword.split("|");
          compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
        });
      }
    }
    function scoreForKeyword(keyword, providedScore) {
      if (providedScore) {
        return Number(providedScore);
      }
      return commonKeyword(keyword) ? 0 : 1;
    }
    function commonKeyword(keyword) {
      return COMMON_KEYWORDS.includes(keyword.toLowerCase());
    }
    var seenDeprecations = {};
    var error = (message) => {
      console.error(message);
    };
    var warn = (message, ...args) => {
      console.log(`WARN: ${message}`, ...args);
    };
    var deprecated = (version2, message) => {
      if (seenDeprecations[`${version2}/${message}`]) return;
      console.log(`Deprecated as of ${version2}. ${message}`);
      seenDeprecations[`${version2}/${message}`] = true;
    };
    var MultiClassError = new Error();
    function remapScopeNames(mode, regexes, { key }) {
      let offset = 0;
      const scopeNames = mode[key];
      const emit = {};
      const positions = {};
      for (let i = 1; i <= regexes.length; i++) {
        positions[i + offset] = scopeNames[i];
        emit[i + offset] = true;
        offset += countMatchGroups(regexes[i - 1]);
      }
      mode[key] = positions;
      mode[key]._emit = emit;
      mode[key]._multi = true;
    }
    function beginMultiClass(mode) {
      if (!Array.isArray(mode.begin)) return;
      if (mode.skip || mode.excludeBegin || mode.returnBegin) {
        error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
        throw MultiClassError;
      }
      if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
        error("beginScope must be object");
        throw MultiClassError;
      }
      remapScopeNames(mode, mode.begin, { key: "beginScope" });
      mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
    }
    function endMultiClass(mode) {
      if (!Array.isArray(mode.end)) return;
      if (mode.skip || mode.excludeEnd || mode.returnEnd) {
        error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
        throw MultiClassError;
      }
      if (typeof mode.endScope !== "object" || mode.endScope === null) {
        error("endScope must be object");
        throw MultiClassError;
      }
      remapScopeNames(mode, mode.end, { key: "endScope" });
      mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
    }
    function scopeSugar(mode) {
      if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
        mode.beginScope = mode.scope;
        delete mode.scope;
      }
    }
    function MultiClass(mode) {
      scopeSugar(mode);
      if (typeof mode.beginScope === "string") {
        mode.beginScope = { _wrap: mode.beginScope };
      }
      if (typeof mode.endScope === "string") {
        mode.endScope = { _wrap: mode.endScope };
      }
      beginMultiClass(mode);
      endMultiClass(mode);
    }
    function compileLanguage(language) {
      function langRe(value, global) {
        return new RegExp(
          source(value),
          "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : "")
        );
      }
      class MultiRegex {
        constructor() {
          this.matchIndexes = {};
          this.regexes = [];
          this.matchAt = 1;
          this.position = 0;
        }
        // @ts-ignore
        addRule(re, opts) {
          opts.position = this.position++;
          this.matchIndexes[this.matchAt] = opts;
          this.regexes.push([opts, re]);
          this.matchAt += countMatchGroups(re) + 1;
        }
        compile() {
          if (this.regexes.length === 0) {
            this.exec = () => null;
          }
          const terminators = this.regexes.map((el) => el[1]);
          this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
          this.lastIndex = 0;
        }
        /** @param {string} s */
        exec(s) {
          this.matcherRe.lastIndex = this.lastIndex;
          const match = this.matcherRe.exec(s);
          if (!match) {
            return null;
          }
          const i = match.findIndex((el, i2) => i2 > 0 && el !== void 0);
          const matchData = this.matchIndexes[i];
          match.splice(0, i);
          return Object.assign(match, matchData);
        }
      }
      class ResumableMultiRegex {
        constructor() {
          this.rules = [];
          this.multiRegexes = [];
          this.count = 0;
          this.lastIndex = 0;
          this.regexIndex = 0;
        }
        // @ts-ignore
        getMatcher(index) {
          if (this.multiRegexes[index]) return this.multiRegexes[index];
          const matcher = new MultiRegex();
          this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
          matcher.compile();
          this.multiRegexes[index] = matcher;
          return matcher;
        }
        resumingScanAtSamePosition() {
          return this.regexIndex !== 0;
        }
        considerAll() {
          this.regexIndex = 0;
        }
        // @ts-ignore
        addRule(re, opts) {
          this.rules.push([re, opts]);
          if (opts.type === "begin") this.count++;
        }
        /** @param {string} s */
        exec(s) {
          const m = this.getMatcher(this.regexIndex);
          m.lastIndex = this.lastIndex;
          let result = m.exec(s);
          if (this.resumingScanAtSamePosition()) {
            if (result && result.index === this.lastIndex) ;
            else {
              const m2 = this.getMatcher(0);
              m2.lastIndex = this.lastIndex + 1;
              result = m2.exec(s);
            }
          }
          if (result) {
            this.regexIndex += result.position + 1;
            if (this.regexIndex === this.count) {
              this.considerAll();
            }
          }
          return result;
        }
      }
      function buildModeRegex(mode) {
        const mm = new ResumableMultiRegex();
        mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
        if (mode.terminatorEnd) {
          mm.addRule(mode.terminatorEnd, { type: "end" });
        }
        if (mode.illegal) {
          mm.addRule(mode.illegal, { type: "illegal" });
        }
        return mm;
      }
      function compileMode(mode, parent) {
        const cmode = (
          /** @type CompiledMode */
          mode
        );
        if (mode.isCompiled) return cmode;
        [
          scopeClassName,
          // do this early so compiler extensions generally don't have to worry about
          // the distinction between match/begin
          compileMatch,
          MultiClass,
          beforeMatchExt
        ].forEach((ext) => ext(mode, parent));
        language.compilerExtensions.forEach((ext) => ext(mode, parent));
        mode.__beforeBegin = null;
        [
          beginKeywords,
          // do this later so compiler extensions that come earlier have access to the
          // raw array if they wanted to perhaps manipulate it, etc.
          compileIllegal,
          // default to 1 relevance if not specified
          compileRelevance
        ].forEach((ext) => ext(mode, parent));
        mode.isCompiled = true;
        let keywordPattern = null;
        if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
          mode.keywords = Object.assign({}, mode.keywords);
          keywordPattern = mode.keywords.$pattern;
          delete mode.keywords.$pattern;
        }
        keywordPattern = keywordPattern || /\w+/;
        if (mode.keywords) {
          mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
        }
        cmode.keywordPatternRe = langRe(keywordPattern, true);
        if (parent) {
          if (!mode.begin) mode.begin = /\B|\b/;
          cmode.beginRe = langRe(cmode.begin);
          if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
          if (mode.end) cmode.endRe = langRe(cmode.end);
          cmode.terminatorEnd = source(cmode.end) || "";
          if (mode.endsWithParent && parent.terminatorEnd) {
            cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
          }
        }
        if (mode.illegal) cmode.illegalRe = langRe(
          /** @type {RegExp | string} */
          mode.illegal
        );
        if (!mode.contains) mode.contains = [];
        mode.contains = [].concat(...mode.contains.map(function(c) {
          return expandOrCloneMode(c === "self" ? mode : c);
        }));
        mode.contains.forEach(function(c) {
          compileMode(
            /** @type Mode */
            c,
            cmode
          );
        });
        if (mode.starts) {
          compileMode(mode.starts, parent);
        }
        cmode.matcher = buildModeRegex(cmode);
        return cmode;
      }
      if (!language.compilerExtensions) language.compilerExtensions = [];
      if (language.contains && language.contains.includes("self")) {
        throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      }
      language.classNameAliases = inherit$1(language.classNameAliases || {});
      return compileMode(
        /** @type Mode */
        language
      );
    }
    function dependencyOnParent(mode) {
      if (!mode) return false;
      return mode.endsWithParent || dependencyOnParent(mode.starts);
    }
    function expandOrCloneMode(mode) {
      if (mode.variants && !mode.cachedVariants) {
        mode.cachedVariants = mode.variants.map(function(variant) {
          return inherit$1(mode, { variants: null }, variant);
        });
      }
      if (mode.cachedVariants) {
        return mode.cachedVariants;
      }
      if (dependencyOnParent(mode)) {
        return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
      }
      if (Object.isFrozen(mode)) {
        return inherit$1(mode);
      }
      return mode;
    }
    var version = "11.12.0";
    var HTMLInjectionError = class extends Error {
      constructor(reason, html) {
        super(reason);
        this.name = "HTMLInjectionError";
        this.html = html;
      }
    };
    var escape = escapeHTML;
    var inherit = inherit$1;
    var NO_MATCH = Symbol("nomatch");
    var MAX_KEYWORD_HITS = 7;
    var HLJS = function(hljs) {
      const languages = /* @__PURE__ */ Object.create(null);
      const aliases = /* @__PURE__ */ Object.create(null);
      const plugins = [];
      let SAFE_MODE = true;
      const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
      const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
      let options = {
        ignoreUnescapedHTML: false,
        throwUnescapedHTML: false,
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: "hljs-",
        cssSelector: "pre code",
        languages: null,
        // beta configuration options, subject to change, welcome to discuss
        // https://github.com/highlightjs/highlight.js/issues/1086
        __emitter: TokenTreeEmitter
      };
      function shouldNotHighlight(languageName) {
        return options.noHighlightRe.test(languageName);
      }
      function blockLanguage(block) {
        let classes = block.className + " ";
        classes += block.parentNode ? block.parentNode.className : "";
        const match = options.languageDetectRe.exec(classes);
        if (match) {
          const language = getLanguage(match[1]);
          if (!language) {
            warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
            warn("Falling back to no-highlight mode for this block.", block);
          }
          return language ? match[1] : "no-highlight";
        }
        return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
      }
      function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
        let code = "";
        let languageName = "";
        if (typeof optionsOrCode === "object") {
          code = codeOrLanguageName;
          ignoreIllegals = optionsOrCode.ignoreIllegals;
          languageName = optionsOrCode.language;
        } else {
          deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
          deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
          languageName = codeOrLanguageName;
          code = optionsOrCode;
        }
        if (ignoreIllegals === void 0) {
          ignoreIllegals = true;
        }
        const context = {
          code,
          language: languageName
        };
        fire("before:highlight", context);
        const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
        result.code = context.code;
        fire("after:highlight", result);
        return result;
      }
      function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
        const keywordHits = /* @__PURE__ */ Object.create(null);
        function keywordData(mode, matchText) {
          return mode.keywords[matchText];
        }
        function processKeywords() {
          if (!top.keywords) {
            emitter.addText(modeBuffer);
            return;
          }
          let lastIndex = 0;
          top.keywordPatternRe.lastIndex = 0;
          let match = top.keywordPatternRe.exec(modeBuffer);
          let buf = "";
          while (match) {
            buf += modeBuffer.substring(lastIndex, match.index);
            const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
            const data = keywordData(top, word);
            if (data) {
              const [kind, keywordRelevance] = data;
              emitter.addText(buf);
              buf = "";
              keywordHits[word] = (keywordHits[word] || 0) + 1;
              if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
              if (kind.startsWith("_")) {
                buf += match[0];
              } else {
                const cssClass = language.classNameAliases[kind] || kind;
                emitKeyword(match[0], cssClass);
              }
            } else {
              buf += match[0];
            }
            lastIndex = top.keywordPatternRe.lastIndex;
            match = top.keywordPatternRe.exec(modeBuffer);
          }
          buf += modeBuffer.substring(lastIndex);
          emitter.addText(buf);
        }
        function processSubLanguage() {
          if (modeBuffer === "") return;
          let result2 = null;
          if (typeof top.subLanguage === "string") {
            if (!languages[top.subLanguage]) {
              emitter.addText(modeBuffer);
              return;
            }
            result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
            continuations[top.subLanguage] = /** @type {CompiledMode} */
            result2._top;
          } else {
            result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
          }
          if (top.relevance > 0) {
            relevance += result2.relevance;
          }
          emitter.__addSublanguage(result2._emitter, result2.language);
        }
        function processBuffer() {
          if (top.subLanguage != null) {
            processSubLanguage();
          } else {
            processKeywords();
          }
          modeBuffer = "";
        }
        function emitKeyword(keyword, scope) {
          if (keyword === "") return;
          emitter.startScope(scope);
          emitter.addText(keyword);
          emitter.endScope();
        }
        function emitMultiClass(scope, match) {
          let i = 1;
          const max = match.length - 1;
          while (i <= max) {
            if (!scope._emit[i]) {
              i++;
              continue;
            }
            const klass = language.classNameAliases[scope[i]] || scope[i];
            const text = match[i];
            if (klass) {
              emitKeyword(text, klass);
            } else {
              modeBuffer = text;
              processKeywords();
              modeBuffer = "";
            }
            i++;
          }
        }
        function startNewMode(mode, match) {
          if (mode.scope && typeof mode.scope === "string") {
            emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
          }
          if (mode.beginScope) {
            if (mode.beginScope._wrap) {
              emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
              modeBuffer = "";
            } else if (mode.beginScope._multi) {
              emitMultiClass(mode.beginScope, match);
              modeBuffer = "";
            }
          }
          top = Object.create(mode, { parent: { value: top } });
          return top;
        }
        function endOfMode(mode, match, matchPlusRemainder) {
          let matched = startsWith(mode.endRe, matchPlusRemainder);
          if (matched) {
            if (mode["on:end"]) {
              const resp = new Response2(mode);
              mode["on:end"](match, resp);
              if (resp.isMatchIgnored) matched = false;
            }
            if (matched) {
              while (mode.endsParent && mode.parent) {
                mode = mode.parent;
              }
              return mode;
            }
          }
          if (mode.endsWithParent) {
            return endOfMode(mode.parent, match, matchPlusRemainder);
          }
        }
        function doIgnore(lexeme) {
          if (top.matcher.regexIndex === 0) {
            modeBuffer += lexeme[0];
            return 1;
          } else {
            resumeScanAtSamePosition = true;
            return 0;
          }
        }
        function doBeginMatch(match) {
          const lexeme = match[0];
          const newMode = match.rule;
          const resp = new Response2(newMode);
          const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
          for (const cb of beforeCallbacks) {
            if (!cb) continue;
            cb(match, resp);
            if (resp.isMatchIgnored) return doIgnore(lexeme);
          }
          if (newMode.skip) {
            modeBuffer += lexeme;
          } else {
            if (newMode.excludeBegin) {
              modeBuffer += lexeme;
            }
            processBuffer();
            if (!newMode.returnBegin && !newMode.excludeBegin) {
              modeBuffer = lexeme;
            }
          }
          startNewMode(newMode, match);
          return newMode.returnBegin ? 0 : lexeme.length;
        }
        function doEndMatch(match) {
          const lexeme = match[0];
          const matchPlusRemainder = codeToHighlight.substring(match.index);
          const endMode = endOfMode(top, match, matchPlusRemainder);
          if (!endMode) {
            return NO_MATCH;
          }
          const origin = top;
          if (top.endScope && top.endScope._wrap) {
            processBuffer();
            emitKeyword(lexeme, top.endScope._wrap);
          } else if (top.endScope && top.endScope._multi) {
            processBuffer();
            emitMultiClass(top.endScope, match);
          } else if (origin.skip) {
            modeBuffer += lexeme;
          } else {
            if (!(origin.returnEnd || origin.excludeEnd)) {
              modeBuffer += lexeme;
            }
            processBuffer();
            if (origin.excludeEnd) {
              modeBuffer = lexeme;
            }
          }
          do {
            if (top.scope) {
              emitter.closeNode();
            }
            if (!top.skip && !top.subLanguage) {
              relevance += top.relevance;
            }
            top = top.parent;
          } while (top !== endMode.parent);
          if (endMode.starts) {
            startNewMode(endMode.starts, match);
          }
          return origin.returnEnd ? 0 : lexeme.length;
        }
        function processContinuations() {
          const list = [];
          for (let current = top; current !== language; current = current.parent) {
            if (current.scope) {
              list.unshift(current.scope);
            }
          }
          list.forEach((item) => emitter.openNode(item));
        }
        let lastMatch = {};
        function processLexeme(textBeforeMatch, match) {
          const lexeme = match && match[0];
          modeBuffer += textBeforeMatch;
          if (lexeme == null) {
            processBuffer();
            return 0;
          }
          if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
            modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
            if (!SAFE_MODE) {
              const err = new Error(`0 width match regex (${languageName})`);
              err.languageName = languageName;
              err.badRule = lastMatch.rule;
              throw err;
            }
            return 1;
          }
          lastMatch = match;
          if (match.type === "begin") {
            return doBeginMatch(match);
          } else if (match.type === "illegal" && !ignoreIllegals) {
            const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
            err.mode = top;
            throw err;
          } else if (match.type === "end") {
            const processed = doEndMatch(match);
            if (processed !== NO_MATCH) {
              return processed;
            }
          }
          if (match.type === "illegal" && lexeme === "") {
            if (match.index === codeToHighlight.length) ;
            else {
              modeBuffer += "\n";
            }
            return 1;
          }
          if (iterations > 1e5 && iterations > match.index * 3) {
            const err = new Error("potential infinite loop, way more iterations than matches");
            throw err;
          }
          modeBuffer += lexeme;
          return lexeme.length;
        }
        const language = getLanguage(languageName);
        if (!language) {
          error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
          throw new Error('Unknown language: "' + languageName + '"');
        }
        const md = compileLanguage(language);
        let result = "";
        let top = continuation || md;
        const continuations = {};
        const emitter = new options.__emitter(options);
        processContinuations();
        let modeBuffer = "";
        let relevance = 0;
        let index = 0;
        let iterations = 0;
        let resumeScanAtSamePosition = false;
        try {
          if (!language.__emitTokens) {
            top.matcher.considerAll();
            for (; ; ) {
              iterations++;
              if (resumeScanAtSamePosition) {
                resumeScanAtSamePosition = false;
              } else {
                top.matcher.considerAll();
              }
              top.matcher.lastIndex = index;
              const match = top.matcher.exec(codeToHighlight);
              if (!match) break;
              const beforeMatch = codeToHighlight.substring(index, match.index);
              const processedCount = processLexeme(beforeMatch, match);
              index = match.index + processedCount;
            }
            processLexeme(codeToHighlight.substring(index));
          } else {
            language.__emitTokens(codeToHighlight, emitter);
          }
          emitter.finalize();
          result = emitter.toHTML();
          return {
            language: languageName,
            value: result,
            relevance,
            illegal: false,
            _emitter: emitter,
            _top: top
          };
        } catch (err) {
          if (err.message && err.message.includes("Illegal")) {
            return {
              language: languageName,
              value: escape(codeToHighlight),
              illegal: true,
              relevance: 0,
              _illegalBy: {
                message: err.message,
                index,
                context: codeToHighlight.slice(index - 100, index + 100),
                mode: err.mode,
                resultSoFar: result
              },
              _emitter: emitter
            };
          } else if (SAFE_MODE) {
            return {
              language: languageName,
              value: escape(codeToHighlight),
              illegal: false,
              relevance: 0,
              errorRaised: err,
              _emitter: emitter,
              _top: top
            };
          } else {
            throw err;
          }
        }
      }
      function justTextHighlightResult(code) {
        const result = {
          value: escape(code),
          illegal: false,
          relevance: 0,
          _top: PLAINTEXT_LANGUAGE,
          _emitter: new options.__emitter(options)
        };
        result._emitter.addText(code);
        return result;
      }
      function highlightAuto(code, languageSubset) {
        languageSubset = languageSubset || options.languages || Object.keys(languages);
        const plaintext = justTextHighlightResult(code);
        const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
          (name) => _highlight(name, code, false)
        );
        results.unshift(plaintext);
        const sorted = results.sort((a, b) => {
          if (a.relevance !== b.relevance) return b.relevance - a.relevance;
          if (a.language && b.language) {
            if (getLanguage(a.language).supersetOf === b.language) {
              return 1;
            } else if (getLanguage(b.language).supersetOf === a.language) {
              return -1;
            }
          }
          return 0;
        });
        const [best, secondBest] = sorted;
        const result = best;
        result.secondBest = secondBest;
        return result;
      }
      function updateClassName(element, currentLang, resultLang) {
        const language = currentLang && aliases[currentLang] || resultLang;
        element.classList.add("hljs");
        element.classList.add(`language-${language}`);
      }
      function highlightElement(element) {
        let node = null;
        const language = blockLanguage(element);
        if (shouldNotHighlight(language)) return;
        fire(
          "before:highlightElement",
          { el: element, language }
        );
        if (element.dataset.highlighted) {
          console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
          return;
        }
        if (element.children.length > 0) {
          if (!options.ignoreUnescapedHTML) {
            console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
            console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
            console.warn("The element with unescaped HTML:");
            console.warn(element);
          }
          if (options.throwUnescapedHTML) {
            const err = new HTMLInjectionError(
              "One of your code blocks includes unescaped HTML.",
              element.innerHTML
            );
            throw err;
          }
        }
        node = element;
        const text = node.textContent;
        const result = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
        element.innerHTML = result.value;
        element.dataset.highlighted = "yes";
        updateClassName(element, language, result.language);
        element.result = {
          language: result.language,
          // TODO: remove with version 11.0
          re: result.relevance,
          relevance: result.relevance
        };
        if (result.secondBest) {
          element.secondBest = {
            language: result.secondBest.language,
            relevance: result.secondBest.relevance
          };
        }
        fire("after:highlightElement", { el: element, result, text });
      }
      function configure(userOptions) {
        options = inherit(options, userOptions);
      }
      const initHighlighting = () => {
        highlightAll();
        deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
      };
      function initHighlightingOnLoad() {
        highlightAll();
        deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
      }
      let wantsHighlight = false;
      function highlightAll() {
        function boot() {
          highlightAll();
        }
        if (document.readyState === "loading") {
          if (!wantsHighlight) {
            window.addEventListener("DOMContentLoaded", boot, false);
          }
          wantsHighlight = true;
          return;
        }
        const blocks = document.querySelectorAll(options.cssSelector);
        blocks.forEach(highlightElement);
      }
      function registerLanguage(languageName, languageDefinition) {
        let lang = null;
        try {
          lang = languageDefinition(hljs);
        } catch (error$1) {
          error("Language definition for '{}' could not be registered.".replace("{}", languageName));
          if (!SAFE_MODE) {
            throw error$1;
          } else {
            error(error$1);
          }
          lang = PLAINTEXT_LANGUAGE;
        }
        if (!lang.name) lang.name = languageName;
        languages[languageName] = lang;
        lang.rawDefinition = languageDefinition.bind(null, hljs);
        if (lang.aliases) {
          registerAliases(lang.aliases, { languageName });
        }
      }
      function unregisterLanguage(languageName) {
        delete languages[languageName];
        for (const alias of Object.keys(aliases)) {
          if (aliases[alias] === languageName) {
            delete aliases[alias];
          }
        }
      }
      function listLanguages() {
        return Object.keys(languages);
      }
      function getLanguage(name) {
        name = (name || "").toLowerCase();
        return languages[name] || languages[aliases[name]];
      }
      function registerAliases(aliasList, { languageName }) {
        if (typeof aliasList === "string") {
          aliasList = [aliasList];
        }
        aliasList.forEach((alias) => {
          aliases[alias.toLowerCase()] = languageName;
        });
      }
      function autoDetection(name) {
        const lang = getLanguage(name);
        return lang && !lang.disableAutodetect;
      }
      function upgradePluginAPI(plugin) {
        if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
          plugin["before:highlightElement"] = (data) => {
            plugin["before:highlightBlock"](
              Object.assign({ block: data.el }, data)
            );
          };
        }
        if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
          plugin["after:highlightElement"] = (data) => {
            plugin["after:highlightBlock"](
              Object.assign({ block: data.el }, data)
            );
          };
        }
      }
      function addPlugin(plugin) {
        upgradePluginAPI(plugin);
        plugins.push(plugin);
      }
      function removePlugin(plugin) {
        const index = plugins.indexOf(plugin);
        if (index !== -1) {
          plugins.splice(index, 1);
        }
      }
      function fire(event, args) {
        const cb = event;
        plugins.forEach(function(plugin) {
          if (plugin[cb]) {
            plugin[cb](args);
          }
        });
      }
      function deprecateHighlightBlock(el) {
        deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
        deprecated("10.7.0", "Please use highlightElement now.");
        return highlightElement(el);
      }
      Object.assign(hljs, {
        highlight: highlight2,
        highlightAuto,
        highlightAll,
        highlightElement,
        // TODO: Remove with v12 API
        highlightBlock: deprecateHighlightBlock,
        configure,
        initHighlighting,
        initHighlightingOnLoad,
        registerLanguage,
        unregisterLanguage,
        listLanguages,
        getLanguage,
        registerAliases,
        autoDetection,
        inherit,
        addPlugin,
        removePlugin
      });
      hljs.debugMode = function() {
        SAFE_MODE = false;
      };
      hljs.safeMode = function() {
        SAFE_MODE = true;
      };
      hljs.versionString = version;
      hljs.regex = {
        concat,
        lookahead,
        either,
        optional,
        anyNumberOfTimes
      };
      for (const key in MODES) {
        if (typeof MODES[key] === "object") {
          deepFreeze(MODES[key]);
        }
      }
      Object.assign(hljs, MODES);
      return hljs;
    };
    var highlight = HLJS({});
    highlight.newInstance = () => HLJS({});
    module3.exports = highlight;
    highlight.HighlightJS = highlight;
    highlight.default = highlight;
  }
});

// ../demo/demo.ts
init_define_REFKV_PROFILES();

// node_modules/highlight.js/es/core.js
init_define_REFKV_PROFILES();
var import_core = __toESM(require_core(), 1);
var core_default = import_core.default;

// node_modules/highlight.js/es/languages/python.js
init_define_REFKV_PROFILES();
function python(hljs) {
  const regex = hljs.regex;
  const IDENT_RE = /[\p{XID_Start}_]\p{XID_Continue}*/u;
  const RESERVED_WORDS = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "lazy",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ];
  const BUILT_INS = [
    "__import__",
    "abs",
    "aiter",
    "all",
    "anext",
    "any",
    "ascii",
    "bin",
    "bool",
    "breakpoint",
    "bytearray",
    "bytes",
    "callable",
    "chr",
    "classmethod",
    "compile",
    "complex",
    "delattr",
    "dict",
    "dir",
    "divmod",
    "enumerate",
    "eval",
    "exec",
    "filter",
    "float",
    "format",
    "frozendict",
    "frozenset",
    "getattr",
    "globals",
    "hasattr",
    "hash",
    "help",
    "hex",
    "id",
    "input",
    "int",
    "isinstance",
    "issubclass",
    "iter",
    "len",
    "list",
    "locals",
    "map",
    "max",
    "memoryview",
    "min",
    "next",
    "object",
    "oct",
    "open",
    "ord",
    "pow",
    "print",
    "property",
    "range",
    "repr",
    "reversed",
    "round",
    "sentinel",
    "set",
    "setattr",
    "slice",
    "sorted",
    "staticmethod",
    "str",
    "sum",
    "super",
    "tuple",
    "type",
    "vars",
    "zip"
  ];
  const LITERALS = [
    "__debug__",
    "Ellipsis",
    "False",
    "None",
    "NotImplemented",
    "True"
  ];
  const TYPES2 = [
    "Any",
    "Callable",
    "Coroutine",
    "Dict",
    "List",
    "Literal",
    "Generic",
    "Optional",
    "Sequence",
    "Set",
    "Tuple",
    "Type",
    "Union"
  ];
  const KEYWORDS = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: RESERVED_WORDS,
    built_in: BUILT_INS,
    literal: LITERALS,
    type: TYPES2
  };
  const PROMPT = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  };
  const SUBST = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS,
    illegal: /#/
  };
  const LITERAL_BRACKET = {
    begin: /\{\{/,
    relevance: 0
  };
  const STRING = {
    className: "string",
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT
        ],
        relevance: 10
      },
      {
        begin: /([fFtT][rR]|[rR][fFtT]|[fFtT])'''/,
        end: /'''/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([fFtT][rR]|[rR][fFtT]|[fFtT])"""/,
        end: /"""/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fFtT][rR]|[rR][fFtT]|[fFtT])'/,
        end: /'/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([fFtT][rR]|[rR][fFtT]|[fFtT])"/,
        end: /"/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };
  const digitpart = "[0-9](_?[0-9])*";
  const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
  const lookahead = `\\b|${RESERVED_WORDS.join("|")}`;
  const NUMBER = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})`
      },
      {
        begin: `(${pointfloat})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${digitpart})[jJ](?=${lookahead})`
      }
    ]
  };
  const COMMENT_TYPE = {
    className: "comment",
    begin: regex.lookahead(/# type:/),
    end: /$/,
    keywords: KEYWORDS,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: true
      }
    ]
  };
  const PARAMS = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: true
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [
          "self",
          PROMPT,
          NUMBER,
          STRING,
          hljs.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  SUBST.contains = [
    STRING,
    NUMBER,
    PROMPT
  ];
  return {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: true,
    keywords: KEYWORDS,
    illegal: /(<\/|\?)|=>/,
    contains: [
      PROMPT,
      NUMBER,
      {
        // very common convention
        scope: "variable.language",
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      STRING,
      COMMENT_TYPE,
      hljs.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          IDENT_RE
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [PARAMS]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              IDENT_RE,
              /\s*/,
              /\(\s*/,
              IDENT_RE,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              IDENT_RE
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          NUMBER,
          PARAMS,
          STRING
        ]
      }
    ]
  };
}

// src/client.ts
init_define_REFKV_PROFILES();

// src/server.ts
init_define_REFKV_PROFILES();

// src/archive.ts
init_define_REFKV_PROFILES();

// src/deflate.ts
init_define_REFKV_PROFILES();
var CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
var CRC32C_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 2197175160 ^ c >>> 1 : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32c(data) {
  let c = 4294967295;
  for (let i = 0; i < data.length; i++) c = CRC32C_TABLE[(c ^ data[i]) & 255] ^ c >>> 8;
  return (c ^ 4294967295) >>> 0;
}
var InflateLimitError = class extends Error {
};
async function transform(data, stream) {
  const out2 = new Response(
    new Response(data).body.pipeThrough(stream)
  );
  return new Uint8Array(await out2.arrayBuffer());
}
async function inflateRaw(data, limit) {
  if (limit === void 0) return transform(data, new DecompressionStream("deflate-raw"));
  const reader = new Response(data).body.pipeThrough(new DecompressionStream("deflate-raw")).getReader();
  const chunks = [];
  let n = 0;
  for (; ; ) {
    const { done, value } = await reader.read();
    if (done) break;
    n += value.length;
    if (n > limit) {
      await reader.cancel().catch(() => {
      });
      throw new InflateLimitError(`inflates to more than ${limit} bytes`);
    }
    chunks.push(value);
  }
  const out2 = new Uint8Array(n);
  let at = 0;
  for (const c of chunks) {
    out2.set(c, at);
    at += c.length;
  }
  return out2;
}

// src/net_browser.ts
init_define_REFKV_PROFILES();
function checkedFetch(_check, _policy) {
  return void 0;
}

// src/http.ts
init_define_REFKV_PROFILES();

// src/uri.ts
init_define_REFKV_PROFILES();
var PCT = "%[0-9A-Fa-f]{2}";
var UNRESERVED = "A-Za-z0-9\\-._~";
var SUB_DELIMS = "!$&'()*+,;=";
var PCHAR = `(?:[${UNRESERVED}${SUB_DELIMS}:@]|${PCT})`;
var SPLIT = /^(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/;
var SCHEME = /^[A-Za-z][A-Za-z0-9+.-]*$/;
var AUTHORITY = new RegExp(
  `^(?:(?:[${UNRESERVED}${SUB_DELIMS}:]|${PCT})*@)?(?:\\[[0-9A-Fa-f:.vV${UNRESERVED}${SUB_DELIMS}]+\\]|(?:[${UNRESERVED}${SUB_DELIMS}]|${PCT})*)(?::[0-9]*)?$`
);
var PATH = new RegExp(`^(?:${PCHAR}|/)*$`);
var QUERY = new RegExp(`^(?:${PCHAR}|[/?])*$`);
function split(ref) {
  const m = ref.match(SPLIT);
  return {
    scheme: m[1],
    authority: m[2],
    path: m[3],
    query: m[4],
    fragment: m[5]
  };
}
function isUriReference(ref) {
  if (!/^[\x00-\x7f]*$/.test(ref)) return false;
  const { scheme, authority, path, query, fragment } = split(ref);
  if (scheme !== void 0 && !SCHEME.test(scheme)) return false;
  if (authority !== void 0 && !AUTHORITY.test(authority)) return false;
  if (!PATH.test(path)) return false;
  if (authority !== void 0 && path !== "" && !path.startsWith("/")) {
    return false;
  }
  if (scheme === void 0 && authority === void 0) {
    if (path.split("/", 1)[0].includes(":")) return false;
  }
  for (const part of [query, fragment]) {
    if (part !== void 0 && !QUERY.test(part)) return false;
  }
  return true;
}
function removeDotSegments(input2) {
  const out2 = [];
  let path = input2;
  while (path !== "") {
    if (path.startsWith("../")) path = path.slice(3);
    else if (path.startsWith("./")) path = path.slice(2);
    else if (path.startsWith("/./")) path = path.slice(2);
    else if (path === "/.") path = "/";
    else if (path.startsWith("/../")) {
      path = path.slice(3);
      out2.pop();
    } else if (path === "/..") {
      path = "/";
      out2.pop();
    } else if (path === "." || path === "..") path = "";
    else {
      const i = path.indexOf("/", 1);
      const segment = i === -1 ? path : path.slice(0, i);
      path = i === -1 ? "" : path.slice(i);
      out2.push(segment);
    }
  }
  return out2.join("");
}
function compose(p) {
  let s = p.scheme !== void 0 ? `${p.scheme}:` : "";
  if (p.authority !== void 0) s += `//${p.authority}`;
  s += p.path;
  if (p.query !== void 0) s += `?${p.query}`;
  if (p.fragment !== void 0) s += `#${p.fragment}`;
  return s;
}
function resolveReference(base, ref) {
  if (!isUriReference(ref)) {
    throw new Error(`not a valid URI reference: ${JSON.stringify(ref)}`);
  }
  const b = split(base);
  const r = split(ref);
  if (r.scheme !== void 0) {
    return compose({ ...r, path: removeDotSegments(r.path) });
  }
  if (r.authority !== void 0) {
    return compose({ ...r, scheme: b.scheme, path: removeDotSegments(r.path) });
  }
  if (r.path === "") {
    return compose({
      scheme: b.scheme,
      authority: b.authority,
      path: b.path,
      query: r.query ?? b.query,
      fragment: r.fragment
    });
  }
  let path;
  if (r.path.startsWith("/")) path = removeDotSegments(r.path);
  else if (b.authority !== void 0 && b.path === "") {
    path = removeDotSegments("/" + r.path);
  } else {
    path = removeDotSegments(
      b.path.slice(0, b.path.lastIndexOf("/") + 1) + r.path
    );
  }
  return compose({
    scheme: b.scheme,
    authority: b.authority,
    path,
    query: r.query,
    fragment: r.fragment
  });
}
function getScheme(url2) {
  return split(url2).scheme?.toLowerCase();
}
function checkHttpUrl(url2) {
  const { authority } = split(url2);
  if (authority === void 0 || authority === "") {
    throw new Error(`${url2}: empty or absent host`);
  }
  if (authority.includes("@")) throw new Error(`${url2}: userinfo in URL`);
  const hostPort = authority.match(/^(\[[^\]]*\]|[^:]*)(?::(.*))?$/);
  if (hostPort[1] === "") throw new Error(`${url2}: empty host`);
  const port = hostPort[2];
  if (port !== void 0 && port !== "") {
    if (!/^[0-9]+$/.test(port) || Number(port) > 65535) {
      throw new Error(`${url2}: invalid port ${JSON.stringify(port)}`);
    }
  }
}
var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function parseImfFixdate(value) {
  if (value === null) return void 0;
  const m = value.match(
    /^([A-Za-z]{3}), (\d{2}) ([A-Za-z]{3}) (\d{4}) (\d{2}):(\d{2}):(\d{2}) GMT$/
  );
  if (m === null) return void 0;
  const month = MONTHS.indexOf(m[3]);
  if (!DAYS.includes(m[1]) || month === -1) return void 0;
  const [day, year, hour, minute, second] = [m[2], m[4], m[5], m[6], m[7]].map(
    Number
  );
  if (hour > 23 || minute > 59 || second > 60) return void 0;
  const date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(year, month, day);
  date.setUTCHours(hour, minute, second === 60 ? 59 : second);
  if (date.getUTCDate() !== day || date.getUTCMonth() !== month) {
    return void 0;
  }
  if (DAYS[date.getUTCDay()] !== m[1]) return void 0;
  return Math.floor(date.getTime() / 1e3) + (second === 60 ? 1 : 0);
}
function formatImfFixdate(seconds) {
  const date = /* @__PURE__ */ new Date(0);
  date.setUTCSeconds(Number(seconds));
  const year = date.getUTCFullYear();
  if (!Number.isFinite(date.getTime()) || year < 1 || year > 9999) {
    throw new Error("modified_not_after cannot be written as an HTTP-date");
  }
  const pad = (n, w = 2) => String(n).padStart(w, "0");
  return `${DAYS[date.getUTCDay()]}, ${pad(date.getUTCDate())} ${MONTHS[date.getUTCMonth()]} ${pad(year, 4)} ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())} GMT`;
}

// src/http.ts
var HttpResolutionError = class extends Error {
  /** Whether the object is not the one the pins name: it changed since they were taken. */
  sourceChanged;
  /**
   * Why the request got no response, where a browser could tell (`noResponse`): undefined for a
   * response that failed, or a request outside a browser.
   */
  noResponse;
  constructor(message, sourceChanged = false, noResponse2) {
    super(message);
    this.sourceChanged = sourceChanged;
    this.noResponse = noResponse2;
  }
};
function inBrowser() {
  const g = globalThis;
  return g.document !== void 0 || g.WorkerGlobalScope !== void 0;
}
async function answers(url2) {
  const abort = new AbortController();
  try {
    await fetch(url2, { mode: "no-cors", cache: "no-store", signal: abort.signal });
    return true;
  } catch {
    return false;
  } finally {
    abort.abort();
  }
}
async function noResponse(url2, e, browser = inBrowser(), probe = answers, page = globalThis.location?.protocol) {
  const message = `${url2}: ${e.message}`;
  if (!browser || !(e instanceof TypeError)) return new HttpResolutionError(message);
  if (page === "https:" && new URL(url2).protocol === "http:") {
    return new HttpResolutionError(
      `${message}: this https:// page cannot read an http:// URL (mixed content)`,
      false,
      "mixed-content"
    );
  }
  if (await probe(url2)) {
    return new HttpResolutionError(
      `${message}: the server answered, but its CORS headers do not let this site read the response (it sends no Access-Control-Allow-Origin for this site, or refuses the preflight of a range request)`,
      false,
      "cors"
    );
  }
  return new HttpResolutionError(
    `${message}: the server could not be reached (the host may not exist, or it refused or dropped the connection)`,
    false,
    "unreachable"
  );
}
function single(headers, name) {
  return headers.get(name);
}
async function readHttpRange(url2, start, end, pins, signal, options = {}) {
  try {
    checkHttpUrl(url2);
  } catch (e) {
    throw new HttpResolutionError(e.message);
  }
  const headers = {
    Range: `bytes=${start}-${end - 1}`,
    // Ignored by browsers (forbidden header); honored elsewhere.
    "Accept-Encoding": "identity"
  };
  if (pins.etag !== void 0) headers["If-Match"] = pins.etag;
  if (pins.modifiedNotAfter !== void 0) {
    try {
      headers["If-Unmodified-Since"] = formatImfFixdate(pins.modifiedNotAfter);
    } catch (e) {
      throw new HttpResolutionError(e.message);
    }
  }
  let response;
  try {
    response = options.fetch ? await options.fetch(url2, { headers, signal }, options.allow) : await fetch(url2, { headers, signal, redirect: "follow", cache: "no-store" });
  } catch (e) {
    signal?.throwIfAborted();
    throw await noResponse(url2, e);
  }
  const fail2 = (message, sourceChanged = false) => {
    throw new HttpResolutionError(`${url2}: ${message}`, sourceChanged);
  };
  if (response.redirected) {
    try {
      checkHttpUrl(response.url);
      options.allow?.(response.url);
    } catch (e) {
      await response.body?.cancel();
      fail2(e.message);
    }
  }
  if (response.status === 412) fail2("a pin failed (412)", true);
  if (response.status === 416)
    fail2("the object is shorter than the range (416)", true);
  if (response.status !== 200 && response.status !== 206) {
    fail2(`HTTP ${response.status}`);
  }
  const encoding = response.headers.get("Content-Encoding");
  if (encoding !== null) {
    const values = encoding.split(",").map((v) => v.trim().toLowerCase());
    if (values.length !== 1 || values[0] !== "identity") {
      fail2(`response has Content-Encoding ${JSON.stringify(encoding)}`);
    }
  }
  const etag = single(response.headers, "ETag");
  if (etag !== null && etag.includes(",")) fail2("more than one ETag field");
  const lastModified = single(response.headers, "Last-Modified");
  if (lastModified !== null && lastModified.split(",").length > 2) {
    fail2("more than one Last-Modified field");
  }
  const skip = (header) => header === null && response.type === "cors" && options.unverifiablePins === true;
  if (pins.etag !== void 0 && etag !== pins.etag && !skip(etag)) {
    fail2(
      `the ETag is ${JSON.stringify(etag)}, but the archive pins ${pins.etag}: the source changed since the archive was written, or its server does not send the ETag`,
      true
    );
  }
  if (pins.modifiedNotAfter !== void 0 && !skip(lastModified)) {
    const t = parseImfFixdate(lastModified);
    if (t === void 0) {
      fail2(
        `Last-Modified ${JSON.stringify(lastModified)} is not an IMF-fixdate`
      );
    }
    if (BigInt(t) > pins.modifiedNotAfter)
      fail2("Last-Modified is after the pin", true);
  }
  const body = new Uint8Array(await response.arrayBuffer());
  if (response.status === 200) {
    if (body.length < end) fail2(`object is shorter than ${end} bytes`);
    return { data: body.slice(start, end), size: body.length, ...etag !== null ? { etag } : {} };
  }
  const contentRange = single(response.headers, "Content-Range");
  if (contentRange === null && response.type === "cors") {
    if (body.length !== end - start) {
      fail2(`206 of ${body.length} bytes for [${start}, ${end})`);
    }
    return { data: body, size: void 0, hidden: true, ...etag !== null ? { etag } : {} };
  }
  if (contentRange === null) fail2("206 without Content-Range");
  const m = contentRange.trim().match(/^bytes (\d+)-(\d+)\/(\d+|\*)$/i);
  if (m === null) fail2(`invalid Content-Range ${JSON.stringify(contentRange)}`);
  const a = Number(m[1]);
  const z = Number(m[2]);
  const total = m[3] === "*" ? void 0 : Number(m[3]);
  if (a !== start || z !== end - 1 || body.length !== z - a + 1 || total !== void 0 && z >= total) {
    fail2(
      `server returned ${JSON.stringify(contentRange)} (${body.length} bytes) for [${start}, ${end})`
    );
  }
  return { data: body, size: total, ...etag !== null ? { etag } : {} };
}

// src/protobuf.ts
init_define_REFKV_PROFILES();
var MalformedError = class extends Error {
};
var U64_MAX = (1n << 64n) - 1n;
var U32_MAX = 0xffffffffn;
var utf8 = new TextEncoder();
var strictUtf8 = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
function* fields(buf) {
  let pos = 0;
  const varint2 = () => {
    let v = 0n;
    for (let i = 0; i < 10; i++) {
      if (pos >= buf.length) throw new MalformedError("truncated varint");
      const b = buf[pos++];
      v |= BigInt(b & 127) << BigInt(7 * i);
      if (!(b & 128)) {
        if (v > U64_MAX) throw new MalformedError("varint exceeds 2^64 - 1");
        return v;
      }
    }
    throw new MalformedError("varint longer than 10 bytes");
  };
  while (pos < buf.length) {
    const key = varint2();
    const field = Number(key >> 3n);
    const wireType = Number(key & 7n);
    if (key >> 3n === 0n || key >> 3n > (1n << 29n) - 1n) {
      throw new MalformedError(`invalid field number ${key >> 3n}`);
    }
    let value;
    switch (wireType) {
      case 0:
        value = varint2();
        break;
      case 1:
      case 5: {
        const n = wireType === 1 ? 8 : 4;
        if (pos + n > buf.length) throw new MalformedError("truncated field");
        value = buf.subarray(pos, pos + n);
        pos += n;
        break;
      }
      case 2: {
        const n = varint2();
        if (BigInt(pos) + n > BigInt(buf.length)) {
          throw new MalformedError("LEN field extends past the message");
        }
        value = buf.subarray(pos, pos + Number(n));
        pos += Number(n);
        break;
      }
      default:
        throw new MalformedError(`wire type ${wireType}`);
    }
    yield { field, wireType, value };
  }
}
function expect(f, kind) {
  if (f.wireType !== (kind === "varint" ? 0 : 2)) {
    throw new MalformedError(`field ${f.field} has wire type ${f.wireType}`);
  }
  return f.value;
}
function string(f) {
  try {
    return strictUtf8.decode(expect(f, "len"));
  } catch (e) {
    if (e instanceof MalformedError) throw e;
    throw new MalformedError(`field ${f.field} is not valid UTF-8`);
  }
}
function decodeRange(buf, numSources) {
  let source = 0n;
  let offset = 0n;
  let length = 0n;
  let data;
  let crc;
  for (const f of fields(buf)) {
    switch (f.field) {
      case 1:
        source = expect(f, "varint");
        if (source > U32_MAX) throw new MalformedError("source exceeds uint32");
        break;
      case 6:
        crc = expect(f, "varint");
        if (crc > U32_MAX) throw new MalformedError("crc32c exceeds uint32");
        break;
      case 3:
        offset = expect(f, "varint");
        break;
      case 4:
        length = expect(f, "varint");
        break;
      case 5:
        data = expect(f, "len");
        break;
    }
  }
  if (data !== void 0) {
    if (source !== 0n || offset !== 0n || length !== 0n) {
      throw new MalformedError("literal range with source, offset or length");
    }
    if (crc !== void 0) throw new MalformedError("literal range with a crc32c");
    return { data };
  }
  if (source >= BigInt(numSources)) {
    throw new MalformedError(`source ${source} >= ${numSources} sources`);
  }
  if (offset + length > U64_MAX) {
    throw new MalformedError("offset + length exceeds 2^64 - 1");
  }
  return crc === void 0 ? { source: Number(source), offset, length } : { source: Number(source), offset, length, crc32c: Number(crc) };
}
function rangeSize(r) {
  return "data" in r ? BigInt(r.data.length) : r.length;
}
function decodeReference(headerId, payload, numSources, maxPayload = 65519) {
  if (payload.length > maxPayload) {
    throw new MalformedError(`reference payload exceeds ${maxPayload} bytes`);
  }
  let parts;
  if (headerId === 31350) {
    parts = [decodeRange(payload, numSources)];
  } else {
    parts = [];
    for (const f of fields(payload)) {
      if (f.field === 1) parts.push(decodeRange(expect(f, "len"), numSources));
    }
  }
  if (parts.reduce((n, p) => n + rangeSize(p), 0n) > U64_MAX) {
    throw new MalformedError("reference size exceeds 2^64 - 1");
  }
  return parts;
}
var STRONG_ETAG = /^"[\x21\x23-\x7e]*"$/;
function decodeTable(buf) {
  const sources = [];
  let revision;
  for (const f of fields(buf)) {
    if (f.field === 2) {
      const v = expect(f, "varint");
      if (v > U32_MAX) throw new MalformedError("revision exceeds uint32");
      revision = Number(v);
      continue;
    }
    if (f.field !== 1) continue;
    const s = {};
    let kind;
    for (const g of fields(expect(f, "len"))) {
      switch (g.field) {
        case 1:
          s.url = string(g);
          kind = "url";
          break;
        case 2:
          s.key = string(g);
          kind = "key";
          break;
        case 3:
          s.data = expect(g, "len");
          kind = "data";
          break;
        case 4:
          s.size = expect(g, "varint");
          break;
        case 5:
          s.etag = string(g);
          break;
        case 6: {
          const v = expect(g, "varint");
          s.modifiedNotAfter = v > (1n << 63n) - 1n ? v - (1n << 64n) : v;
          break;
        }
      }
    }
    if (kind === void 0) throw new MalformedError("a source has no kind");
    for (const k of ["url", "key", "data"]) {
      if (k !== kind) delete s[k];
    }
    if ((kind === "url" || kind === "key") && s[kind] === "") {
      throw new MalformedError(`empty ${kind} source`);
    }
    const pinned = s.size !== void 0 || s.etag !== void 0 || s.modifiedNotAfter !== void 0;
    if (pinned && kind !== "url") {
      throw new MalformedError(`pin on a ${kind} source`);
    }
    if (s.etag !== void 0 && !STRONG_ETAG.test(s.etag)) {
      throw new MalformedError(`etag ${s.etag} is not a strong entity tag`);
    }
    sources.push(s);
  }
  return revision === void 0 ? { sources } : { sources, revision };
}

// src/writer.ts
init_define_REFKV_PROFILES();
var RANGE_ID = 31350;
var CONCAT_ID = 31351;
var U64_MAX2 = (1n << 64n) - 1n;
var utf82 = new TextEncoder();

// src/archive.ts
var RefkvError = class extends Error {
  /** The error's class, as spec §6.5 <https://github.com/d-v-b/refkv/blob/main/spec/refkv.md#65-error-reporting> has readers report it. */
  errorClass;
  /**
   * Whether a source is not the one the archive pins (spec §5.1
   * <https://github.com/d-v-b/refkv/blob/main/spec/refkv.md#51-pins>): a pin or a range checksum
   * failed, so the source changed since the archive was written.
   */
  sourceChanged;
  constructor(errorClass, message, sourceChanged = false) {
    super(`refkv ${errorClass} error: ${message}`);
    this.errorClass = errorClass;
    this.sourceChanged = sourceChanged;
  }
};
var DEFAULT_POLICY = {
  schemes: [],
  allowFilesFromRemoteArchives: false,
  allowPrivateHosts: false,
  allowUncheckedProxy: false,
  maxSources: 1 << 22,
  maxReads: 1024,
  maxFormatEntry: 256 << 20,
  unverifiablePins: false
};
function schemeOf(url2) {
  const i = url2.indexOf(":");
  const s = i < 0 ? "" : url2.slice(0, i).toLowerCase();
  return s === "https" ? "http" : s;
}
function matchesPrefix(url2, prefix2) {
  if (!url2.startsWith(prefix2)) return false;
  const rest = url2.slice(prefix2.length);
  if (!(prefix2.endsWith("/") || rest === "" || "/?#".includes(rest[0]))) return false;
  const path = url2.split(/[?#]/, 1)[0];
  return !/%(2[eEfF]|5[cC])/.test(path);
}
function parseIPv4(s) {
  const m = s.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (!m) return void 0;
  const parts = m.slice(1).map(Number);
  if (parts.some((p) => p > 255)) return void 0;
  return parts.reduce((a, p) => a << 8n | BigInt(p), 0n);
}
function parseIPv6(s) {
  let text = s.split("%", 1)[0];
  const tail = [];
  const dotted = text.match(/^(.*:)(\d+\.\d+\.\d+\.\d+)$/);
  if (dotted) {
    const v4 = parseIPv4(dotted[2]);
    if (v4 === void 0) return void 0;
    tail.push(Number(v4 >> 16n), Number(v4 & 0xffffn));
    text = dotted[1].endsWith("::") ? dotted[1] : dotted[1].slice(0, -1);
  }
  const halves = text.split("::");
  if (halves.length > 2) return void 0;
  const groups = (h) => h === "" ? [] : h.split(":");
  const head = groups(halves[0]);
  const rest = halves.length === 2 ? groups(halves[1]) : [];
  if (![...head, ...rest].every((g) => /^[0-9a-fA-F]{1,4}$/.test(g))) return void 0;
  const n = head.length + rest.length + tail.length;
  if (halves.length === 1 ? n !== 8 : n > 7) return void 0;
  const words = [
    ...head.map((g) => parseInt(g, 16)),
    ...Array(8 - n).fill(0),
    ...rest.map((g) => parseInt(g, 16)),
    ...tail
  ];
  return words.reduce((a, w) => a << 16n | BigInt(w), 0n);
}
function nets(version, list) {
  return list.map((n) => {
    const [addr, len] = n.split("/");
    return [version === 4 ? parseIPv4(addr) : parseIPv6(addr), Number(len)];
  });
}
var CLASSES = [
  ["loopback", nets(4, ["127.0.0.0/8"]), nets(6, ["::1/128"])],
  ["private", nets(4, ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"]), nets(6, ["fc00::/7"])],
  ["link-local", nets(4, ["169.254.0.0/16"]), nets(6, ["fe80::/10"])],
  [
    "special",
    nets(4, [
      "0.0.0.0/8",
      "100.64.0.0/10",
      "192.0.0.0/24",
      "192.0.2.0/24",
      "198.18.0.0/15",
      "198.51.100.0/24",
      "203.0.113.0/24",
      "224.0.0.0/3"
    ]),
    nets(6, [
      "::/8",
      "64:ff9b:1::/48",
      "100::/63",
      "2001::/23",
      "2001:db8::/32",
      "3fff::/20",
      "5f00::/16",
      "fec0::/10",
      "ff00::/8"
    ])
  ]
];
var within = (a, bits, [net, len]) => a >> BigInt(bits - len) === net >> BigInt(bits - len);
function classOf(a, version) {
  if (version === 6) {
    if (a >> 32n === 0xffffn || a >> 32n === 0x64ff9b0000000000000000n) return classOf(a & 0xffffffffn, 4);
    if (a >> 112n === 0x2002n) return classOf(a >> 80n & 0xffffffffn, 4);
  }
  for (const [c, v4, v6] of CLASSES) {
    if ((version === 4 ? v4 : v6).some((n) => within(a, version === 4 ? 32 : 128, n))) return c;
  }
  return "public";
}
function addressClass(address) {
  const v4 = parseIPv4(address);
  if (v4 !== void 0) return classOf(v4, 4);
  const v6 = address.includes(":") ? parseIPv6(address) : void 0;
  return v6 === void 0 ? void 0 : classOf(v6, 6);
}
function hostClass(url2) {
  let host;
  try {
    host = new URL(url2).hostname.toLowerCase().replace(/\.$/, "");
  } catch {
    return void 0;
  }
  if (host === "localhost" || host.endsWith(".localhost")) return "loopback";
  if (host.startsWith("[") && host.endsWith("]")) host = host.slice(1, -1);
  return addressClass(host);
}
function validatePolicy(policy) {
  if ((policy.schemes ?? []).some((s) => s.toLowerCase() === "file")) {
    throw new TypeError(
      "Policy.schemes may not name 'file': a local archive reads files already, and a remote one needs the unsafe allowFilesFromRemoteArchives: true"
    );
  }
}
function checkPolicy(policy, base, url2) {
  validatePolicy(policy);
  const local = schemeOf(base) === "file";
  const scheme = schemeOf(url2);
  if (policy.prefixes !== void 0) {
    if (!policy.prefixes.some((p) => matchesPrefix(url2, p))) {
      throw new RefkvError("resolution", `${url2}: not under an allowed URL prefix (spec \xA76.7 <https://github.com/d-v-b/refkv/blob/main/spec/refkv.md#67-reader-policy>)`);
    }
  } else if (scheme === "file") {
    if (!local && !policy.allowFilesFromRemoteArchives) {
      throw new RefkvError("resolution", `${url2}: an archive opened from a URL may not read local files (spec \xA76.7 <https://github.com/d-v-b/refkv/blob/main/spec/refkv.md#67-reader-policy>)`);
    }
  } else if (scheme !== "http" && !(policy.schemes ?? []).some((s) => schemeOf(`${s}:`) === scheme)) {
    throw new RefkvError("resolution", `${url2}: the scheme '${scheme}' is not allowed (spec \xA76.7 <https://github.com/d-v-b/refkv/blob/main/spec/refkv.md#67-reader-policy>)`);
  }
  if (scheme !== "http") return;
  const c = hostClass(url2);
  if (c !== void 0) checkClass(policy, url2, c);
}
function checkClass(policy, url2, c, address) {
  if (c === "public" || policy.allowPrivateHosts) return;
  const at = address === void 0 ? "" : ` (at ${address})`;
  throw new RefkvError(
    "resolution",
    `${url2}: the host${at} is a ${c} address, which the reader does not reach without allowPrivateHosts: true (spec \xA76.7 <https://github.com/d-v-b/refkv/blob/main/spec/refkv.md#67-reader-policy>)`
  );
}
function checkAddress(policy, url2, address) {
  const c = addressClass(address);
  if (c === void 0) throw new RefkvError("resolution", `${url2}: ${address} is not an IP address`);
  checkClass(policy, url2, c, address);
}
var MERGE_GAP = 1 << 16;
var U32_ALL = 4294967295;
var strictUtf82 = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
function safe(v, what) {
  if (v > BigInt(Number.MAX_SAFE_INTEGER)) {
    throw new RefkvError("archive", `${what} is too large`);
  }
  return Number(v);
}
function parseExtra(extra, view, base) {
  const blocks = [];
  let at = 0;
  while (at < extra.length) {
    if (at + 4 > extra.length) return void 0;
    const id = view.getUint16(base + at, true);
    const n = view.getUint16(base + at + 2, true);
    if (at + 4 + n > extra.length) return void 0;
    blocks.push({ id, data: extra.subarray(at + 4, at + 4 + n) });
    at += 4 + n;
  }
  return blocks;
}
var Archive = class _Archive {
  bytes;
  baseUrl;
  sources;
  entries;
  /**
   * The spec revision the writer followed, if the archive records one (spec §1.3
   * <https://github.com/d-v-b/refkv/blob/main/spec/refkv.md#13-versioning>).
   */
  revision;
  policy;
  /** The largest reference payload the binding allows (a ZIP extra field's, here). */
  maxPayload = 65519;
  fetchRange;
  /** Sends this archive's requests, checking addresses (rule 3), where the platform allows. */
  netFetch;
  constructor(bytes, baseUrl, sources, entries, fetchRange, policy, revision) {
    this.bytes = bytes;
    this.baseUrl = baseUrl;
    this.sources = sources;
    this.entries = entries;
    this.fetchRange = fetchRange;
    this.policy = policy;
    this.revision = revision;
    this.netFetch = policy.allowPrivateHosts ? void 0 : checkedFetch((url2, address) => checkAddress(policy, url2, address), policy);
  }
  /**
   * Opens an archive (spec §6.1
   * <https://github.com/d-v-b/refkv/blob/main/spec/refkv.md#61-opening>); `baseUrl` resolves
   * relative `url` sources.
   * `policy` (spec §6.7 <https://github.com/d-v-b/refkv/blob/main/spec/refkv.md#67-reader-policy>)
   * defaults to `DEFAULT_POLICY`, which allows http(s)
   * sources on public hosts, and for a local archive (a `file:` `baseUrl`) also `file`
   * sources. Loopback and private hosts are refused for every archive, local or not,
   * unless the policy has `allowPrivateHosts: true`. Throws a `RefkvError` of class
   * "archive" for an archive opening refuses.
   */
  static async open(bytes, baseUrl, fetchRange = (url2, start, end, pins, options) => readHttpRange(url2, start, end, pins, void 0, options), policy = {}) {
    validatePolicy(policy);
    const rules = { ...DEFAULT_POLICY, ...policy };
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    const n = bytes.length;
    let eocd = -1;
    for (const commentLength of [38, 22]) {
      const at2 = n - 22 - commentLength;
      if (at2 >= 0 && view.getUint32(at2, true) === 101010256 && view.getUint16(at2 + 20, true) === commentLength) {
        eocd = at2;
        break;
      }
    }
    if (eocd < 0) throw new RefkvError("archive", "not a vzip archive");
    const comment = bytes.subarray(eocd + 22);
    const magic = new TextDecoder().decode(comment.subarray(0, 6));
    if (!magic.startsWith("vzip/")) {
      throw new RefkvError("archive", "not a vzip archive");
    }
    if (magic !== "vzip/0") {
      throw new RefkvError("archive", `unsupported version ${magic}`);
    }
    const loc = eocd - 20;
    if (loc < 0 || view.getUint32(loc, true) !== 117853008) {
      throw new RefkvError("archive", "no zip64 locator before the end of central directory record");
    }
    const at64 = safe(view.getBigUint64(loc + 8, true), "zip64 record offset");
    if (at64 + 56 > n || view.getUint32(at64, true) !== 101075792 || view.getBigUint64(at64 + 4, true) !== 44n) {
      throw new RefkvError("archive", "invalid zip64 end of central directory");
    }
    const cdSize = view.getBigUint64(at64 + 40, true);
    const cdOffset = view.getBigUint64(at64 + 48, true);
    const cdStart = safe(cdOffset, "central directory offset");
    const cdEnd = cdStart + safe(cdSize, "central directory size");
    if (cdEnd > n) throw new RefkvError("archive", "central directory outside the file");
    const entries = /* @__PURE__ */ new Map();
    let at = cdStart;
    while (at < cdEnd) {
      if (at + 46 > cdEnd || view.getUint32(at, true) !== 33639248) {
        throw new RefkvError("archive", `bad central directory record at ${at}`);
      }
      const flags = view.getUint16(at + 8, true);
      const method = view.getUint16(at + 10, true);
      let csize = view.getUint32(at + 20, true);
      let size = view.getUint32(at + 24, true);
      const nameLen = view.getUint16(at + 28, true);
      const extraLen = view.getUint16(at + 30, true);
      const commentLen = view.getUint16(at + 32, true);
      let offset = view.getUint32(at + 42, true);
      const end = at + 46 + nameLen + extraLen + commentLen;
      if (end > cdEnd) throw new RefkvError("archive", "truncated central directory");
      const nameBytes = bytes.subarray(at + 46, at + 46 + nameLen);
      const extraStart = at + 46 + nameLen;
      const extra = bytes.subarray(extraStart, extraStart + extraLen);
      at = end;
      let key;
      try {
        key = strictUtf82.decode(nameBytes);
      } catch {
        continue;
      }
      if (key === "") continue;
      if (entries.has(key)) throw new RefkvError("archive", `duplicate key ${key}`);
      const entry = { key, method, csize, size, bodyOffset: 0 };
      entries.set(key, entry);
      const blocks = parseExtra(extra, view, extraStart);
      const refs = blocks?.filter((b) => b.id === RANGE_ID || b.id === CONCAT_ID) ?? [];
      const zip64 = blocks?.filter((b) => b.id === 1) ?? [];
      const large = size === U32_ALL && csize === U32_ALL;
      const need = (large ? 16 : 0) + (offset === U32_ALL ? 8 : 0);
      if (blocks === void 0) entry.error = "unparseable extra field";
      else if (refs.length > 1) entry.error = "more than one reference block";
      else if (zip64.length > 1) entry.error = "more than one zip64 block";
      else if (size === U32_ALL !== (csize === U32_ALL)) {
        entry.error = "exactly one size field is 0xFFFFFFFF";
      } else if (need > 0) {
        if (zip64.length === 0 || zip64[0].data.length < need) {
          entry.error = "zip64 block missing or too short";
        } else {
          const z = new DataView(zip64[0].data.buffer, zip64[0].data.byteOffset, need);
          if (large) {
            size = safe(z.getBigUint64(0, true), "entry size");
            csize = safe(z.getBigUint64(8, true), "entry size");
          }
          if (offset === U32_ALL) offset = z.getBigUint64(large ? 16 : 0, true);
        }
      }
      if (entry.error === void 0 && method !== 0 && method !== 8) {
        entry.error = `compression method ${method}`;
      } else if (entry.error === void 0 && flags & 1) {
        entry.error = "encrypted";
      } else if (entry.error === void 0 && large && method !== 0) {
        entry.error = "large entry is not STORED";
      }
      if (entry.error === void 0 && refs.length === 1) {
        if (method !== 0) entry.error = "reference entry with method 8";
        else if (large) entry.error = "reference entry is large";
        entry.reference = { headerId: refs[0].id, payload: refs[0].data };
      }
      entry.size = size;
      entry.csize = csize;
      entry.bodyOffset = (typeof offset === "bigint" ? Number(offset) : offset) + 30 + nameLen + (large ? 20 : 0);
    }
    const cview = new DataView(comment.buffer, comment.byteOffset, comment.byteLength);
    const sOffset = safe(cview.getBigUint64(6, true), "sources offset");
    const sSize = safe(cview.getBigUint64(14, true), "sources size");
    if (sOffset + sSize > n) throw new RefkvError("archive", "source table outside the file");
    let table;
    try {
      table = decodeTable(
        await inflateRaw(bytes.subarray(sOffset, sOffset + sSize), rules.maxFormatEntry)
      );
    } catch (e) {
      const why = e instanceof InflateLimitError ? `${e.message}; this reader allows ${rules.maxFormatEntry} (spec \xA76.7 <https://github.com/d-v-b/refkv/blob/main/spec/refkv.md#67-reader-policy>)` : e.message;
      throw new RefkvError("archive", `source table: ${why}`);
    }
    if (table.sources.length > rules.maxSources) {
      throw new RefkvError(
        "archive",
        `the source table has ${table.sources.length} sources; this reader allows ${rules.maxSources}`
      );
    }
    return new _Archive(bytes, baseUrl, table.sources, entries, fetchRange, rules, table.revision);
  }
  /**
   * The visible entry for `key`, or undefined (spec §6.2
   * <https://github.com/d-v-b/refkv/blob/main/spec/refkv.md#62-operations>).
   */
  lookup(key) {
    if (key.startsWith("__vz__/")) return void 0;
    const entry = this.entryFor(key);
    if (entry?.error !== void 0) {
      throw new RefkvError("entry", `${JSON.stringify(key)}: ${entry.error}`);
    }
    return entry;
  }
  /** The entry of `key` as the container has it, hidden or not: a binding finds keys here. */
  entryFor(key) {
    return this.entries.get(key);
  }
  /** Visible keys, in UTF-8 order. */
  keys() {
    return [...this.entries.keys()].filter((k) => !k.startsWith("__vz__/")).sort((a, b) => compareUtf8(a, b));
  }
  ranges(entry) {
    try {
      return decodeReference(
        entry.reference.headerId,
        entry.reference.payload,
        this.sources.length,
        this.maxPayload
      );
    } catch (e) {
      if (!(e instanceof MalformedError)) throw e;
      throw new RefkvError("payload", `${JSON.stringify(entry.key)}: ${e.message}`);
    }
  }
  /** Size of an entry's value. */
  size(entry) {
    if (entry.reference === void 0) return entry.size;
    const total = this.ranges(entry).reduce((n, r) => n + rangeSize(r), 0n);
    if (total > BigInt(Number.MAX_SAFE_INTEGER)) {
      throw new RefkvError("request", "value is too large for this reader");
    }
    return Number(total);
  }
  async body(entry) {
    const end = entry.bodyOffset + entry.csize;
    if (end > this.bytes.length) {
      throw new RefkvError("body", `${entry.key}: body outside the file`);
    }
    const stored = this.bytes.subarray(entry.bodyOffset, end);
    let body = stored;
    if (entry.method === 8) {
      try {
        body = await inflateRaw(stored, entry.size);
      } catch (e) {
        throw new RefkvError("body", `${entry.key}: ${e.message}`);
      }
    } else if (entry.csize !== entry.size) {
      throw new RefkvError("body", `${entry.key}: STORED sizes differ`);
    }
    if (body.length !== entry.size) {
      throw new RefkvError("body", `${entry.key}: inflates to ${body.length} bytes`);
    }
    if (entry.crc32c !== void 0 && crc32c(body) !== entry.crc32c) {
      throw new RefkvError("body", `${entry.key}: the value does not match its crc32c`);
    }
    return body;
  }
  async source(r) {
    const s = this.sources[r.source];
    const start = r.offset;
    const end = r.offset + r.length;
    const fail2 = (m, sourceChanged = false) => {
      throw new RefkvError("resolution", `source ${r.source}: ${m}`, sourceChanged);
    };
    if (s.data !== void 0) {
      if (end > BigInt(s.data.length)) fail2("range past the end of the data");
      return s.data.subarray(Number(start), Number(end));
    }
    if (s.key !== void 0) {
      const target = this.entryFor(s.key);
      if (target === void 0 || target.reference !== void 0 || target.error) {
        fail2(`key ${JSON.stringify(s.key)} is not a bytes entry`);
      }
      const value = await this.body(target);
      if (end > BigInt(value.length)) fail2("range past the end of the key's value");
      return value.subarray(Number(start), Number(end));
    }
    let url2;
    try {
      url2 = resolveReference(this.baseUrl, s.url);
    } catch (e) {
      return fail2(e.message);
    }
    checkPolicy(this.policy, this.baseUrl, url2);
    const scheme = getScheme(url2);
    if (scheme !== "http" && scheme !== "https") fail2(`unsupported scheme in ${url2}`);
    try {
      const { data, size, hidden } = await this.fetchRange(
        url2,
        safe(start, "offset"),
        safe(end, "end"),
        s,
        {
          allow: (u) => checkPolicy(this.policy, this.baseUrl, u),
          unverifiablePins: this.policy.unverifiablePins,
          ...this.netFetch ? { fetch: this.netFetch } : {}
        }
      );
      const unseen = size === void 0 && hidden === true && this.policy.unverifiablePins;
      if (s.size !== void 0 && !unseen && BigInt(size ?? -1) !== s.size) {
        fail2(
          size === void 0 ? `${url2}: the archive pins the size ${s.size}, which the response does not give` : `${url2}: the source is ${size} bytes, but the archive pins ${s.size}: the source changed since the archive was written`,
          size !== void 0
        );
      }
      return data;
    } catch (e) {
      if (e instanceof HttpResolutionError) fail2(e.message, e.sourceChanged);
      throw e;
    }
  }
  /** Bytes `[start, end)` of a visible key's value, or undefined if absent. */
  async read(key, start = 0, end) {
    const entry = this.lookup(key);
    if (entry === void 0) return void 0;
    const size = this.size(entry);
    end ??= size;
    if (start < 0 || end < start || end > size) {
      throw new RefkvError("request", `range [${start}, ${end}) of a ${size}-byte value`);
    }
    if (entry.reference === void 0) {
      return (await this.body(entry)).subarray(start, end);
    }
    const parts = [];
    const cuts = [];
    let at = 0;
    for (const r of this.ranges(entry)) {
      const n = Number(rangeSize(r));
      const a = Math.max(start, at);
      const b = Math.min(end, at + n);
      if (a < b) {
        if ("data" in r) {
          parts.push(Promise.resolve(r.data.subarray(a - at, b - at)));
          cuts.push({ lo: 0, hi: b - a });
        } else {
          let read;
          if (r.crc32c === void 0) {
            read = { source: r.source, offset: r.offset + BigInt(a - at), length: BigInt(b - a) };
            cuts.push({ lo: 0, hi: b - a });
          } else {
            read = { source: r.source, offset: r.offset, length: r.length };
            cuts.push({ lo: a - at, hi: b - at, crc: r.crc32c });
          }
          parts.push(this.sources[r.source].url !== void 0 ? read : this.source(read));
        }
      }
      at += n;
    }
    const reads = parts.filter((p) => !(p instanceof Promise));
    const sorted = [...reads].sort((x, y) => x.source - y.source || (x.offset < y.offset ? -1 : x.offset > y.offset ? 1 : 0));
    const runs = [];
    const runOf = /* @__PURE__ */ new Map();
    for (const read of sorted) {
      const last = runs[runs.length - 1];
      const readEnd = read.offset + read.length;
      if (last && last.source === read.source && read.offset - last.end <= BigInt(MERGE_GAP)) {
        if (readEnd > last.end) last.end = readEnd;
      } else {
        runs.push({ source: read.source, offset: read.offset, end: readEnd });
      }
      runOf.set(read, runs[runs.length - 1]);
    }
    if (runs.length > this.policy.maxReads) {
      for (const p of parts) if (p instanceof Promise) p.catch(() => {
      });
      throw new RefkvError(
        "request",
        `the value needs ${runs.length} reads; this reader allows ${this.policy.maxReads} (spec \xA76.7 <https://github.com/d-v-b/refkv/blob/main/spec/refkv.md#67-reader-policy>)`
      );
    }
    for (const run of runs) {
      run.data = this.source({ source: run.source, offset: run.offset, length: run.end - run.offset });
    }
    const whole = await Promise.all(
      parts.map(async (p) => {
        if (p instanceof Promise) return p;
        const run = runOf.get(p);
        const from = Number(p.offset - run.offset);
        return (await run.data).subarray(from, from + Number(p.length));
      })
    );
    const chunks = whole.map((data, i) => {
      const { lo: lo2, hi: hi2, crc } = cuts[i];
      if (crc !== void 0 && crc32c(data) !== crc) {
        throw new RefkvError(
          "resolution",
          `the bytes read do not match the range's crc32c ${crc} (got ${crc32c(data)}): the source changed since the archive was written`,
          true
        );
      }
      return data.subarray(lo2, hi2);
    });
    const out2 = new Uint8Array(end - start);
    let o = 0;
    for (const c of chunks) {
      out2.set(c, o);
      o += c.length;
    }
    return out2;
  }
};
function compareUtf8(a, b) {
  const x = [...a];
  const y = [...b];
  for (let i = 0; i < Math.min(x.length, y.length); i++) {
    const d = x[i].codePointAt(0) - y[i].codePointAt(0);
    if (d !== 0) return d;
  }
  return x.length - y.length;
}

// src/zarrify/common.ts
init_define_REFKV_PROFILES();

// src/zarrify/profiles.ts
init_define_REFKV_PROFILES();

// src/zarrify/profiles_bundled.ts
init_define_REFKV_PROFILES();
var REGISTRY = define_REFKV_PROFILES_default;

// src/zarrify/profiles.ts
var REGISTRY2 = REGISTRY;
var FILE_FORMATS = new Set(
  REGISTRY2.filter((e) => e.kind === "file" || e.kind === "both").map((e) => e.name)
);

// src/zarrify/common.ts
var PROFILES = Object.fromEntries(
  REGISTRY2.map((e) => [e.name, [e.uuid, e.version, e.title]])
);
var UUIDS = new Set(Object.values(PROFILES).map(([uuid]) => uuid));
var MAX_CHUNK = 2 ** 24;
var MAX_PADDING = 2 ** 16 - 2 ** 10;
var SMALL_PADDING = 2 ** 10;
var MAX_TOTAL_PADDING = 2 ** 20;
var RAGGED_CHUNK = 2 ** 20;

// src/zarrify/index.ts
init_define_REFKV_PROFILES();

// src/zarrify/ir/run.ts
init_define_REFKV_PROFILES();

// src/zarrify/ir/wasm.ts
init_define_REFKV_PROFILES();

// src/zarrify/ir/wasm_browser.ts
init_define_REFKV_PROFILES();
var url;
var given;
async function compileIr() {
  if (given !== void 0) return given;
  const at = url ?? new URL("refkv_ir.wasm", globalThis.location?.href);
  const response = await fetch(at);
  if (!response.ok) throw new Error(`cannot fetch the IR core's wasm module ${String(at)}: HTTP ${response.status}`);
  if ((response.headers.get("Content-Type") ?? "").split(";")[0].trim() === "application/wasm") {
    return WebAssembly.compileStreaming(response);
  }
  return WebAssembly.compile(await response.arrayBuffer());
}

// src/zarrify/ir/wasm.ts
var instance;
function ir() {
  instance ??= (async () => {
    const module3 = await compileIr();
    const { exports } = await WebAssembly.instantiate(module3, {});
    return exports;
  })();
  instance.catch(() => instance = void 0);
  return instance;
}
function put(w, bytes) {
  const p = w.vz_alloc(bytes.length) >>> 0;
  new Uint8Array(w.memory.buffer, p, bytes.length).set(bytes);
  return p;
}
function out(w, n) {
  return new Uint8Array(w.memory.buffer, w.vz_out() >>> 0, n).slice();
}

// src/zarrify/ir/run.ts
var utf83 = new TextEncoder();

// src/zarrify/ir/source.ts
init_define_REFKV_PROFILES();

// src/zarrify/store.ts
init_define_REFKV_PROFILES();
var MAX_SAFE = Number.MAX_SAFE_INTEGER;
var MAX_DOCUMENT = 1 << 24;
var utf84 = new TextEncoder();
var utf8Fatal = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
var PREFETCH_BYTES = 64 << 20;
var MAX_BLOCK = 2 ** 31 - 1;

// src/zarrify/ir/source.ts
var OPEN = 1 << 16;
var isNode = typeof process !== "undefined" && process.versions?.node !== void 0;

// src/zarrify/ir/store.ts
init_define_REFKV_PROFILES();
var utf85 = new TextEncoder();

// src/zarrify/ir/vsi.ts
init_define_REFKV_PROFILES();

// src/phkv.ts
init_define_REFKV_PROFILES();

// src/ptrhash.ts
init_define_REFKV_PROFILES();

// src/xxh64.ts
init_define_REFKV_PROFILES();
var MASK = (1n << 64n) - 1n;
var P1 = 0x9e3779b185ebca87n;
var P2 = 0xc2b2ae3d27d4eb4fn;
var P3 = 0x165667b19e3779f9n;
var P4 = 0x85ebca77c2b2ae63n;
var P5 = 0x27d4eb2f165667c5n;
var rotl = (x, r) => (x << r | x >> 64n - r) & MASK;
var round = (acc, input2) => rotl(acc + input2 * P2 & MASK, 31n) * P1 & MASK;
var merge = (h, v) => ((h ^ round(0n, v)) * P1 & MASK) + P4 & MASK;
function xxh64(data, seed = 0n) {
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  const n = data.length;
  let at = 0;
  let h;
  if (n >= 32) {
    let v1 = seed + P1 + P2 & MASK;
    let v2 = seed + P2 & MASK;
    let v3 = seed & MASK;
    let v4 = seed - P1 & MASK;
    for (; at + 32 <= n; at += 32) {
      v1 = round(v1, view.getBigUint64(at, true));
      v2 = round(v2, view.getBigUint64(at + 8, true));
      v3 = round(v3, view.getBigUint64(at + 16, true));
      v4 = round(v4, view.getBigUint64(at + 24, true));
    }
    h = rotl(v1, 1n) + rotl(v2, 7n) + rotl(v3, 12n) + rotl(v4, 18n) & MASK;
    h = merge(h, v1);
    h = merge(h, v2);
    h = merge(h, v3);
    h = merge(h, v4);
  } else {
    h = seed + P5 & MASK;
  }
  h = h + BigInt(n) & MASK;
  for (; at + 8 <= n; at += 8) {
    h ^= round(0n, view.getBigUint64(at, true));
    h = (rotl(h, 27n) * P1 & MASK) + P4 & MASK;
  }
  if (at + 4 <= n) {
    h ^= BigInt(view.getUint32(at, true)) * P1 & MASK;
    h = (rotl(h, 23n) * P2 & MASK) + P3 & MASK;
    at += 4;
  }
  for (; at < n; at++) {
    h ^= BigInt(data[at]) * P5 & MASK;
    h = rotl(h, 11n) * P1 & MASK;
  }
  h ^= h >> 33n;
  h = h * P2 & MASK;
  h ^= h >> 29n;
  h = h * P3 & MASK;
  h ^= h >> 32n;
  return h;
}

// src/ptrhash.ts
var PART_KEYS = 1 << 16;
var TWO32 = 4294967296;
var PILOT_HI = 1367130551;
var PILOT_LO = 656542357;
var C1_HI = 4283543511;
var C1_LO = 3981806797;
var C2_HI = 3301882366;
var C2_LO = 444984403;
var H = 0;
var OH = 0;
var OL = 0;
function mul32(a, b) {
  const a0 = a & 65535;
  const a1 = a >>> 16;
  const b0 = b & 65535;
  const b1 = b >>> 16;
  const mid = a0 * b1 + a1 * b0;
  const lo2 = a0 * b0 + mid % 65536 * 65536;
  H = a1 * b1 + Math.floor(mid / 65536) + Math.floor(lo2 / TWO32);
  return lo2 >>> 0;
}
function mulWrap(xh, xl, ch, cl) {
  const lo2 = mul32(xl, cl);
  OL = lo2;
  OH = H + Math.imul(xh, cl) + Math.imul(xl, ch) >>> 0;
}
function fmix(xh, xl) {
  xl = (xl ^ xh >>> 1) >>> 0;
  mulWrap(xh, xl, C1_HI, C1_LO);
  xh = OH;
  xl = (OL ^ xh >>> 1) >>> 0;
  mulWrap(xh, xl, C2_HI, C2_LO);
  xh = OH;
  OL = (OL ^ xh >>> 1) >>> 0;
}
function mulhi(xh, xl, m) {
  mul32(xl, m);
  const p1h = H;
  const p2l = mul32(xh, m);
  return H + (p2l + p1h >= TWO32 ? 1 : 0);
}
function mulSmallWrap(xh, xl, m) {
  const lo2 = mul32(xl, m);
  const p1h = H;
  const p2l = mul32(xh, m);
  OL = lo2;
  OH = p1h + p2l >>> 0;
}
var PILOT_HIS = new Uint32Array(256);
var PILOT_LOS = new Uint32Array(256);
for (let p = 0; p < 256; p++) {
  mulWrap(0, p, PILOT_HI, PILOT_LO);
  PILOT_HIS[p] = OH;
  PILOT_LOS[p] = OL;
}
var hi = (h) => Number(h >> 32n);
var lo = (h) => Number(h & 0xffffffffn);
function bucket(params, hh, hl) {
  const p = mulhi(hh, hl, params.parts);
  mulSmallWrap(hh, hl, params.parts);
  return p * params.buckets + mulhi(OH, OL, params.buckets);
}
function slotInPart(params, hh, hl, pilot) {
  fmix((hh ^ PILOT_HIS[pilot]) >>> 0, (hl ^ PILOT_LOS[pilot]) >>> 0);
  return mulhi(OH, OL, params.slots);
}
function slot(params, pilots, h) {
  const hh = hi(h);
  const hl = lo(h);
  const p = mulhi(hh, hl, params.parts);
  const b = bucket(params, hh, hl);
  return p * params.slots + slotInPart(params, hh, hl, pilots[b]);
}
var hash = (key, seed) => xxh64(key, seed);

// src/phkv.ts
var MAGIC = "PHKV";
var SUPERBLOCK_SIZE = 64;
var DIR_ENTRY_SIZE = 40;
var SLOT_SIZE = 12;
var SLOT_LENGTH_MAX = 4294967295;
var MAX_PAYLOAD = 1 << 24;
var SECTION = { SOURCES: 1, RECORDS: 2, PAGES: 3, PTRHASH: 4, SLOTS: 5, PROPERTY: 6, METADATA: 7 };
var KIND_BYTES = 0;
var KIND_RANGE = 1;
var KIND_CONCAT = 2;
var REC_INLINE = 1;
var REC_CRC32C = 2;
var REC_HIDDEN = 4;
var utf86 = new TextEncoder();
var strictUtf83 = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
var probeDistances = () => [0, ...Array.from({ length: 21 }, (_, k) => 2 ** (10 + k))];
var compareBytes = (a, b) => {
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) if (a[i] !== b[i]) return a[i] - b[i];
  return a.length - b.length;
};
var fail = (errorClass, message) => {
  throw new RefkvError(errorClass, message);
};
var safe2 = (v, what) => v > BigInt(Number.MAX_SAFE_INTEGER) ? fail("archive", `${what} is too large for this reader`) : Number(v);
function findSuperblock(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  for (const d of probeDistances()) {
    const at = bytes.length - d - SUPERBLOCK_SIZE;
    if (at < 0) break;
    if (strictUtf83.decode(bytes.subarray(at, at + 4)) !== MAGIC || view.getUint32(at + 60, true) !== crc32c(bytes.subarray(at, at + 60)) || view.getBigUint64(at + 8, true) !== BigInt(d)) {
      continue;
    }
    return {
      version: view.getUint16(at + 4, true),
      flags: view.getUint16(at + 6, true),
      distance: d,
      keyCount: safe2(view.getBigUint64(at + 16, true), "the key count"),
      directoryOffset: safe2(view.getBigUint64(at + 24, true), "the directory offset"),
      directoryLength: safe2(view.getBigUint64(at + 32, true), "the directory length"),
      directoryCrc: view.getUint32(at + 56, true)
    };
  }
  return void 0;
}
function isPhkv(bytes) {
  try {
    return findSuperblock(bytes) !== void 0;
  } catch {
    return false;
  }
}
function varint(b, at) {
  let v = 0;
  let scale = 1;
  for (let i = 0; i < 10; i++) {
    if (at >= b.length) return fail("entry", "a truncated varint");
    const byte = b[at++];
    v += (byte & 127) * scale;
    if (v > Number.MAX_SAFE_INTEGER) return fail("entry", "a varint too large for this reader");
    if (!(byte & 128)) return [v, at];
    scale *= 128;
  }
  return fail("entry", "an overlong varint");
}
var PhkvArchive = class _PhkvArchive extends Archive {
  maxPayload = MAX_PAYLOAD;
  params;
  pilots;
  slots;
  records;
  recordsStart;
  keyCount;
  pages = [];
  listed;
  /**
   * Opens a standalone phkv store held in memory (spec §22.1
   * <https://github.com/d-v-b/refkv/blob/main/spec/bindings/phkv.md#221-opening>): `baseUrl`
   * resolves relative `url` sources, as `Archive.open`'s does, and `policy` is the reader policy.
   * Throws a `RefkvError` of class "archive" for a store that opening refuses.
   */
  static async openStore(bytes, baseUrl, fetchRange, policy = {}) {
    const rules = { ...DEFAULT_POLICY, ...policy };
    const sb = findSuperblock(bytes);
    if (sb === void 0) return fail("archive", "not a phkv store");
    if (sb.version !== 0) return fail("archive", `unsupported phkv version ${sb.version}`);
    if (sb.flags & 1) return fail("archive", "a hybrid phkv store: this reader opens standalone stores only");
    if (sb.flags !== 0) return fail("archive", `unsupported phkv flags ${sb.flags}`);
    const n = bytes.length;
    if (sb.directoryLength % DIR_ENTRY_SIZE !== 0 || sb.directoryOffset + sb.directoryLength > n) {
      return fail("archive", "the section directory lies outside the file or has a partial entry");
    }
    const directory = bytes.subarray(sb.directoryOffset, sb.directoryOffset + sb.directoryLength);
    if (crc32c(directory) !== sb.directoryCrc) return fail("archive", "the section directory does not match its crc32c");
    const dir = [];
    for (let at = 0; at < directory.length; at += DIR_ENTRY_SIZE) {
      const d = new DataView(directory.buffer, directory.byteOffset + at, DIR_ENTRY_SIZE);
      if (d.getUint16(6, true) !== 0 || d.getUint32(36, true) !== 0) {
        return fail("archive", "a directory entry's reserved fields are not 0");
      }
      const flags = directory[at + 5];
      if (flags & ~1) return fail("archive", `a directory entry has unknown flags ${flags}`);
      const entry = {
        type: d.getUint32(0, true),
        codec: directory[at + 4],
        flags,
        offset: safe2(d.getBigUint64(8, true), "a section offset"),
        length: safe2(d.getBigUint64(16, true), "a section length"),
        size: safe2(d.getBigUint64(24, true), "a section size"),
        crc: d.getUint32(32, true)
      };
      if (entry.offset + entry.length > n) return fail("archive", `section ${entry.type} lies outside the file`);
      const known = Object.values(SECTION).includes(entry.type);
      if (!known && entry.flags & 1) return fail("archive", `unknown section ${entry.type} must be understood`);
      if (known) dir.push(entry);
    }
    const one = (type, required) => {
      const found = dir.filter((d) => d.type === type);
      if (found.length > 1) return fail("archive", `more than one section of type ${type}`);
      if (found.length === 0 && required) return fail("archive", `no section of type ${type}`);
      return found[0];
    };
    const sourcesDir = one(SECTION.SOURCES, true);
    const records = one(SECTION.RECORDS, sb.keyCount > 0);
    const pagesDir = one(SECTION.PAGES, sb.keyCount > 0);
    const ptrhashDir = one(SECTION.PTRHASH, sb.keyCount > 0);
    const slotsDir = one(SECTION.SLOTS, sb.keyCount > 0);
    const metadata = one(SECTION.METADATA, false);
    if (sb.keyCount === 0 && (records || pagesDir || ptrhashDir || slotsDir)) {
      return fail("archive", "a store with no keys has sections that need keys");
    }
    for (const d of [records, slotsDir]) if (d !== void 0 && d.codec !== 0) fail("archive", `section ${d.type} has codec ${d.codec}`);
    const whole = async (d) => {
      const stored = bytes.subarray(d.offset, d.offset + d.length);
      if (crc32c(stored) !== d.crc) return fail("archive", `section ${d.type} does not match its crc32c`);
      let body;
      if (d.codec === 0) body = stored;
      else if (d.codec === 1) {
        try {
          body = await inflateRaw(stored, Math.min(d.size, rules.maxFormatEntry));
        } catch (e) {
          return fail("archive", `section ${d.type}: ${e.message}`);
        }
      } else if (d.codec === 2) {
        return fail(
          "archive",
          `section ${d.type} is compressed with Zstandard, which this reader does not decode yet (it reads codecs 0 and 1)`
        );
      } else return fail("archive", `section ${d.type} has codec ${d.codec}, which the format does not define`);
      if (body.length !== d.size) return fail("archive", `section ${d.type} decodes to ${body.length} bytes, not ${d.size}`);
      if (d.size > rules.maxFormatEntry) return fail("archive", `section ${d.type} is larger than this reader allows`);
      return body;
    };
    let table;
    try {
      table = decodeTable(await whole(sourcesDir));
    } catch (e) {
      throw e instanceof RefkvError ? e : new RefkvError("archive", `source table: ${e.message}`);
    }
    if (table.sources.length > rules.maxSources) {
      return fail("archive", `the source table has ${table.sources.length} sources; this reader allows ${rules.maxSources}`);
    }
    if (metadata !== void 0) await whole(metadata);
    const store = new _PhkvArchive(bytes, baseUrl, table.sources, /* @__PURE__ */ new Map(), fetchRange ?? defaultFetch, rules, table.revision);
    store.keyCount = sb.keyCount;
    if (sb.keyCount > 0) {
      store.recordsStart = records.offset;
      store.records = bytes.subarray(records.offset, records.offset + records.length);
      const ph = await whole(ptrhashDir);
      if (ph.length < 40 || ph[0] !== 1 || ph.subarray(1, 8).some((b) => b !== 0)) {
        return fail("archive", "the PTRHASH section is malformed");
      }
      const pv = new DataView(ph.buffer, ph.byteOffset, ph.byteLength);
      const params = {
        seed: pv.getBigUint64(8, true),
        parts: safe2(pv.getBigUint64(16, true), "the part count"),
        slots: safe2(pv.getBigUint64(24, true), "the slots per part"),
        buckets: safe2(pv.getBigUint64(32, true), "the buckets per part")
      };
      if (params.parts === 0 || params.slots === 0 || params.buckets === 0 || params.parts * params.slots < sb.keyCount || params.parts * params.slots >= 2 ** 32 || params.slots >= 2 ** 32 || params.buckets >= 2 ** 32 || params.parts >= 2 ** 32 || ph.length !== 40 + params.parts * params.buckets) {
        return fail("archive", "the PTRHASH section is malformed");
      }
      store.params = params;
      store.pilots = ph.subarray(40);
      if (slotsDir.length !== SLOT_SIZE * params.parts * params.slots) {
        return fail("archive", "the SLOTS section is not 12 bytes per slot");
      }
      store.slots = bytes.subarray(slotsDir.offset, slotsDir.offset + slotsDir.length);
      const pagesBytes = await whole(pagesDir);
      let at = 0;
      let next = 0;
      let previous;
      try {
        while (at < pagesBytes.length) {
          let len;
          [len, at] = varint(pagesBytes, at);
          if (len === 0 || at + len > pagesBytes.length) throw new Error("a page with a bad first_key");
          const first = pagesBytes.subarray(at, at + len);
          at += len;
          let offset;
          let length;
          [offset, at] = varint(pagesBytes, at);
          [length, at] = varint(pagesBytes, at);
          if (length === 0 || offset !== records.offset + next) throw new Error("the pages are not contiguous over RECORDS");
          if (previous !== void 0 && compareBytes(previous, first) >= 0) throw new Error("page keys are not increasing");
          previous = first;
          next += length;
          store.pages.push({ key: strictUtf83.decode(first), offset: offset - records.offset, length });
        }
        if (next !== records.length) throw new Error("the pages do not fill RECORDS");
      } catch (e) {
        return fail("archive", `the page index: ${e.message}`);
      }
    }
    return store;
  }
  /** The record of `key`, found through the perfect hash (spec §19.5), as an entry. */
  entryFor(key) {
    const known = this.entries.get(key);
    if (known !== void 0 || this.keyCount === 0) return known;
    const want = utf86.encode(key);
    if (want.length === 0) return void 0;
    const s = slot(this.params, this.pilots, hash(want, this.params.seed));
    const view = new DataView(this.slots.buffer, this.slots.byteOffset + s * SLOT_SIZE, SLOT_SIZE);
    const length = view.getUint32(8, true);
    if (length === 0) return void 0;
    const at = safe2(view.getBigUint64(0, true), "a record offset");
    const entry = this.record(at, length === SLOT_LENGTH_MAX ? void 0 : length, key);
    if (entry !== void 0) this.entries.set(key, entry);
    return entry;
  }
  /**
   * The record at `at` of RECORDS, as an entry, or undefined if its key is not `key`. A malformed
   * record is an entry error (spec §19.5 step 3). `length` is the slot's, if it gave one.
   */
  record(at, length, key) {
    const bad = (m) => fail("entry", `${JSON.stringify(key)}: ${m}`);
    const b = this.records;
    if (at >= b.length || length !== void 0 && (length < 6 || at + length > b.length)) bad("its slot is outside RECORDS");
    const end = length === void 0 ? b.length : at + length;
    const body = b.subarray(0, end);
    let p = at;
    let keyLength;
    [keyLength, p] = varint(body, p);
    if (keyLength === 0 || p + 2 > end) bad("a malformed record");
    const kind = body[p++];
    const flags = body[p++];
    if (kind > KIND_CONCAT || flags & ~(REC_INLINE | REC_CRC32C | REC_HIDDEN)) bad("a malformed record");
    let rank;
    [rank, p] = varint(body, p);
    void rank;
    const entry = { key, method: 0, csize: 0, size: 0, bodyOffset: 0 };
    let dataLength = 0;
    let offset = 0;
    if (kind === KIND_BYTES) {
      if (p >= end) bad("a malformed record");
      const codec = body[p++];
      if (codec > 2) bad("a malformed record");
      if (!(flags & REC_INLINE)) [offset, p] = varint(body, p);
      [entry.csize, p] = varint(body, p);
      [entry.size, p] = varint(body, p);
      if (flags & REC_CRC32C) {
        if (p + 4 > end) bad("a malformed record");
        entry.crc32c = new DataView(body.buffer, body.byteOffset + p, 4).getUint32(0, true);
        p += 4;
      }
      entry.method = codec === 0 ? 0 : codec === 1 ? 8 : -1;
      if (codec === 2) entry.error = "Zstandard values are not supported by this reader";
      dataLength = flags & REC_INLINE ? entry.csize : 0;
    } else {
      if (flags & (REC_INLINE | REC_CRC32C)) bad("a malformed reference record");
      [dataLength, p] = varint(body, p);
      if (dataLength > MAX_PAYLOAD) bad("a reference payload over 2^24 bytes");
    }
    if (p + keyLength + dataLength > end) bad("a record that extends past its end");
    let name;
    try {
      name = strictUtf83.decode(body.subarray(p, p + keyLength));
    } catch {
      return bad("a key that is not UTF-8");
    }
    if (name !== key) return void 0;
    p += keyLength;
    if (kind === KIND_BYTES) {
      entry.bodyOffset = flags & REC_INLINE ? this.recordsStart + p : offset;
    } else {
      entry.reference = { headerId: kind === KIND_RANGE ? RANGE_ID : CONCAT_ID, payload: body.slice(p, p + dataLength) };
    }
    return entry;
  }
  /** A phkv store reserves no names (spec §16): every key is visible. */
  lookup(key) {
    const entry = this.entryFor(key);
    if (entry?.error !== void 0) throw new RefkvError("entry", `${JSON.stringify(key)}: ${entry.error}`);
    return entry;
  }
  /** The keys, in UTF-8 order, from the page index. */
  keys() {
    if (this.listed === void 0) {
      const keys = [];
      for (const page of this.pages) {
        let p = page.offset;
        const end = page.offset + page.length;
        while (p < end) {
          let keyLength;
          const start = p;
          [keyLength, p] = varint(this.records, p);
          const kind = this.records[p];
          const flags = this.records[p + 1];
          p += 2;
          [, p] = varint(this.records, p);
          let dataLength;
          if (kind === KIND_BYTES) {
            p++;
            if (!(flags & REC_INLINE)) [, p] = varint(this.records, p);
            let stored;
            [stored, p] = varint(this.records, p);
            [, p] = varint(this.records, p);
            if (flags & REC_CRC32C) p += 4;
            dataLength = flags & REC_INLINE ? stored : 0;
          } else {
            [dataLength, p] = varint(this.records, p);
          }
          if (p + keyLength + dataLength > end) fail("entry", `a page that cannot be parsed, at ${start}`);
          if (!(flags & REC_HIDDEN)) keys.push(strictUtf83.decode(this.records.subarray(p, p + keyLength)));
          p += keyLength + dataLength;
        }
      }
      this.listed = keys;
    }
    return this.listed;
  }
};
var defaultFetch = (url2, start, end, pins, options) => readHttpRange(url2, start, end, pins, void 0, options);
function openArchive(bytes, baseUrl, fetchRange, policy = {}) {
  return isPhkv(bytes) ? PhkvArchive.openStore(bytes, baseUrl, fetchRange, policy) : Archive.open(bytes, baseUrl, fetchRange, policy);
}

// src/server.ts
var ARCHIVE_KEY = "__vz__/archive.vzip";
var PHKV_ARCHIVE_KEY = "__vz__/archive.phkv";
var WORKER_HEADER = "X-Vzip-Worker";
var ERROR_HEADER = "X-Vzip-Error";
var PENDING_HEADER = "X-Vzip-Pending";
var PENDING = Symbol("pending");
function encodeId(url2) {
  let s = "";
  for (const b of new TextEncoder().encode(url2)) s += String.fromCharCode(b);
  return btoa(s).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

// src/client.ts
async function registerVzipWorker(scriptUrl = "vzip-sw.js", timeoutMs = 1e4) {
  const script = new URL(scriptUrl, location.href).href;
  const registration = await navigator.serviceWorker.register(script);
  const container = navigator.serviceWorker;
  const ours = () => container.controller?.scriptURL === script;
  if (!ours()) {
    await new Promise((resolve, reject) => {
      const finish = (error) => {
        clearTimeout(timer);
        container.removeEventListener("controllerchange", check);
        if (error) reject(error);
        else resolve();
      };
      const check = () => {
        if (ours()) finish();
      };
      const timer = setTimeout(
        () => finish(new Error("the refkv service worker did not take control of this page; reload it and try again")),
        timeoutMs
      );
      container.addEventListener("controllerchange", check);
      container.ready.then((r) => r.active?.postMessage("claim"));
      check();
    });
  }
  return new URL("vz/", registration.scope).href;
}
async function fetchWorker(url2, init) {
  for (; ; ) {
    const r = await fetch(url2, init);
    if (r.status !== 503 || r.headers.get(PENDING_HEADER) === null) return r;
    await r.body?.cancel();
  }
}
function imageZarrUrl(prefix2, url2) {
  return `${prefix2}image/${encodeId(new URL(url2).href)}/`;
}
function archiveZarrUrl(prefix2, url2) {
  return `${prefix2}archive/${encodeId(new URL(url2).href)}/`;
}
function archiveDownloadUrl(zarrUrl, format = "vzip") {
  return zarrUrl + (format === "phkv" ? PHKV_ARCHIVE_KEY : ARCHIVE_KEY);
}
var isArchiveUrl = (url2) => /\.(?:vzip|phkv)(?:[?#]|$)/i.test(url2);
var isVzipUrl = (url2) => /\.vzip(?:[?#]|$)/i.test(url2);

// ../demo/contrast.ts
init_define_REFKV_PROFILES();

// src/embed.ts
init_define_REFKV_PROFILES();
async function decodeGrib(chunk, configuration, shape, dataType = "float64") {
  const w = await ir();
  const config = new TextEncoder().encode(JSON.stringify(configuration ?? {}));
  const dims = new Uint8Array(shape.length * 8);
  shape.forEach((n, i) => new DataView(dims.buffer).setBigUint64(i * 8, BigInt(n), true));
  const pc = put(w, chunk);
  const pg = put(w, config);
  const ps = put(w, dims);
  try {
    const n = Number(w.vz_grib_decode(pc, chunk.length, pg, config.length, ps, shape.length));
    if (n < 0) throw new Error(new TextDecoder().decode(out(w, -n)));
    const bytes = out(w, n);
    const values = new Float64Array(n / 8);
    new Uint8Array(values.buffer).set(bytes);
    return dataType === "float32" ? Float32Array.from(values) : values;
  } finally {
    w.vz_free(pc, chunk.length);
    w.vz_free(pg, config.length);
    w.vz_free(ps, dims.length);
  }
}

// ../demo/map/jpeg2k_decoder.ts
init_define_REFKV_PROFILES();
var HEADER = 16;
var module;
function getModule(url2) {
  module ??= WebAssembly.instantiateStreaming(fetch(url2), {}).then(
    (r) => r.instance.exports
  );
  return module;
}
async function decodeJpeg2000(wasmUrl, buffer, bytesPerSample, signed) {
  const m = await getModule(wasmUrl);
  const input2 = m.malloc(buffer.byteLength);
  if (input2 === 0) throw new Error("jpeg2000: out of memory");
  let result = 0;
  let resultSize = 0;
  try {
    new Uint8Array(m.memory.buffer).set(buffer, input2);
    result = m.decode(input2, buffer.byteLength, bytesPerSample, signed ? 1 : 0);
    if (result === 0) throw new Error("jpeg2000: out of memory");
    const [width, height, numComponents, bodyLength] = new Uint32Array(
      m.memory.buffer.slice(result, result + HEADER)
    );
    resultSize = HEADER + bodyLength;
    const body = new Uint8Array(m.memory.buffer, result + HEADER, bodyLength);
    if (width === 0) throw new Error(`jpeg2000: ${new TextDecoder().decode(body)}`);
    return { width, height, numComponents, data: body.slice() };
  } finally {
    m.free(input2, buffer.byteLength);
    if (result !== 0) m.free(result, resultSize);
  }
}

// ../demo/jpegxr_decoder.ts
init_define_REFKV_PROFILES();
var HEADER2 = 24;
var ENOSYS = 52;
var env = {
  emscripten_notify_memory_growth: () => {
  },
  clock_time_get: () => ENOSYS,
  fd_write: () => ENOSYS,
  fd_read: () => ENOSYS,
  fd_close: () => ENOSYS,
  fd_seek: () => ENOSYS,
  __syscall_unlinkat: () => -ENOSYS,
  __syscall_rmdir: () => -ENOSYS,
  __syscall_readlinkat: () => -ENOSYS
};
var module2;
function getModule2(url2) {
  module2 ??= WebAssembly.instantiateStreaming(fetch(url2), { env, wasi_snapshot_preview1: env }).then((r) => {
    const e = r.instance.exports;
    e._initialize();
    return e;
  });
  return module2;
}
async function decodeJpegXr(wasmUrl, buffer) {
  const m = await getModule2(wasmUrl);
  const input2 = m.malloc(buffer.byteLength);
  if (input2 === 0) throw new Error("jpegxr: out of memory");
  let result = 0;
  try {
    new Uint8Array(m.memory.buffer).set(buffer, input2);
    result = m.jpegxr_decode(input2, buffer.byteLength);
    if (result === 0) throw new Error("jpegxr: out of memory");
    const [width, height, numComponents, bytesPerSample, kind, length] = new Uint32Array(
      m.memory.buffer.slice(result, result + HEADER2)
    );
    const body = new Uint8Array(m.memory.buffer, result + HEADER2, length);
    if (width === 0) throw new Error(`jpegxr: ${new TextDecoder().decode(body)}`);
    return { width, height, numComponents, bytesPerSample, isFloat: kind === 1, data: body.slice() };
  } finally {
    m.free(input2);
    if (result !== 0) m.free(result);
  }
}

// ../demo/contrast.ts
var JPEG2K_WASM = new URL("jpeg2000_decoder.wasm", location.href);
var JPEGXR_WASM = new URL("jpegxr.wasm", location.href);
var TYPES = {
  uint8: [1, (v, i) => v.getUint8(i)],
  int8: [1, (v, i) => v.getInt8(i)],
  uint16: [2, (v, i, le) => v.getUint16(i, le)],
  int16: [2, (v, i, le) => v.getInt16(i, le)],
  uint32: [4, (v, i, le) => v.getUint32(i, le)],
  int32: [4, (v, i, le) => v.getInt32(i, le)],
  float32: [4, (v, i, le) => v.getFloat32(i, le)],
  float64: [8, (v, i, le) => v.getFloat64(i, le)]
};
function tooNarrow(w, dataType) {
  return /int/.test(dataType) && w.end - w.start < 1;
}
function fullRange(w, dataType) {
  if (!/int/.test(dataType) || w.min === void 0 || w.max === void 0 || w.max <= w.min) return false;
  return w.start <= w.min && w.end - w.start >= 0.99 * (w.max - w.min);
}
function usableWindow(w, dataType) {
  return w !== void 0 && !tooNarrow(w, dataType) && !fullRange(w, dataType);
}
async function decodeChunk(meta, encoded) {
  const codecs = meta.codecs.filter((c) => c.name !== "transpose");
  const [first, ...rest] = codecs;
  if (rest.some((c) => c.name !== "gzip" && c.name !== "numcodecs.zlib")) return void 0;
  let bytes = encoded;
  for (const c of [...rest].reverse()) {
    const inflate = new DecompressionStream(c.name === "gzip" ? "gzip" : "deflate");
    bytes = new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(inflate)).arrayBuffer());
  }
  const [size] = TYPES[meta.data_type] ?? [0];
  switch (first?.name) {
    case "bytes":
      return [bytes, first.configuration?.endian !== "big"];
    case "imagecodecs_jpeg2k":
      if (size !== 1 && size !== 2) return void 0;
      return [(await decodeJpeg2000(JPEG2K_WASM, bytes, size, /^int/.test(meta.data_type))).data, true];
    case "imagecodecs_jpegxr": {
      const d = await decodeJpegXr(JPEGXR_WASM, bytes);
      return d.bytesPerSample === size ? [d.data, true] : void 0;
    }
    case "refkv.grib": {
      const values = await decodeGrib(bytes, first.configuration, meta.chunk_grid.configuration.chunk_shape, meta.data_type);
      return [new Uint8Array(values.buffer), true];
    }
  }
  return void 0;
}
function percentiles(bytes, le, dataType, fill) {
  const [size, get] = TYPES[dataType];
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const n = Math.floor(bytes.length / size);
  const step = Math.max(1, Math.floor(n / 1e5));
  const values = [];
  for (let i = 0; i < n; i += step) {
    const v = get(view, i * size, le);
    if (v !== fill && !Number.isNaN(v)) values.push(v);
  }
  if (values.length === 0) return void 0;
  values.sort((x, y) => x - y);
  const lo2 = values[Math.floor(values.length * 0.05)], hi2 = values[Math.min(values.length - 1, Math.floor(values.length * 0.999))];
  return lo2 < hi2 ? [lo2, hi2] : void 0;
}
async function sampleRanges(url2, meta, axes, chunks, channels, start) {
  if (!TYPES[meta.data_type] || meta.chunk_grid.name !== "regular") return channels?.map(() => void 0) ?? [void 0];
  const c = axes.findIndex((a) => a.name === "c");
  if (channels !== void 0 && (c < 0 || chunks[c] !== 1)) return channels.map(() => void 0);
  const index = meta.shape.map((n, i) => Math.floor((start?.[i] ?? (axes[i]?.name === "t" ? 0 : Math.floor(n / 2))) / chunks[i]));
  const enc = meta.chunk_key_encoding ?? { name: "default" };
  const sep = enc.configuration?.separator ?? (enc.name === "v2" ? "." : "/");
  const one = async (k) => {
    const at = index.slice();
    if (k !== void 0) at[c] = k;
    const key = enc.name === "v2" ? at.join(sep) || "0" : ["c", ...at].join(sep);
    try {
      const r = await fetch(`${url2}${key}`);
      if (!r.ok) return void 0;
      const decoded = await decodeChunk(meta, new Uint8Array(await r.arrayBuffer()));
      return decoded && percentiles(decoded[0], decoded[1], meta.data_type, meta.fill_value);
    } catch {
      return void 0;
    }
  };
  return Promise.all(channels === void 0 ? [one()] : channels.map(one));
}

// ../demo/python.ts
init_define_REFKV_PROFILES();
var MEDIA = ["mp3", "flac", "mp4"];
function stem(url2) {
  const segments = new URL(url2).pathname.split("/").filter((s) => s !== "" && s !== "content");
  let last = segments.at(-1) ?? "input";
  try {
    last = decodeURIComponent(last);
  } catch {
  }
  return last.replace(/\.(vzip|zarr|n5|zip|safe)$/i, "").replace(/\.[^.]*$/, "").replace(/[^\w.-]+/g, "_") || "input";
}
function pythonScript(url2, isArchive, profile, release, format = "vzip") {
  const extra = MEDIA.includes(profile ?? "") ? "media" : "images";
  const requirement = `refkv[${extra}]${release ? `>=${release}` : ""}`;
  const name = stem(url2);
  const header = [
    "# /// script",
    '# requires-python = ">=3.12"',
    `# dependencies = [${JSON.stringify(requirement)}]`,
    "# ///",
    ""
  ];
  const open = isArchive ? [
    `"""Open the vzip archive ${name}.vzip with zarr-python."""`,
    "",
    "import zarr",
    "import refkv.zarr",
    "",
    "# The archive holds the hierarchy's metadata and references to the original's bytes,",
    "# which are read only when an array's chunks are.",
    `store = refkv.zarr.open(${JSON.stringify(url2)})  # a read-only zarr store`
  ] : [
    `"""Zarrify ${name} and open its Zarr hierarchy with zarr-python."""`,
    "",
    "import zarr",
    "import refkv.zarr",
    "from refkv.zarrify import zarrify",
    "",
    "# Reads the input's structure (its headers and indexes), not its data, which stays where",
    "# it is and is read only when an array's chunks are.",
    `reference = zarrify(${JSON.stringify(url2)})`,
    "store = refkv.zarr.store(reference)  # a read-only zarr store"
  ];
  const save = isArchive ? [] : format === "phkv" ? [
    "",
    "# This page downloads a phkv store of the hierarchy. This script does not write one:",
    "# refkv's Python package has no phkv writer or reader yet, only vzip archives, which",
    "# it saves and reopens with refkv.zarr.open(url).",
    `# reference.save(${JSON.stringify(`${name}.vzip`)})`
  ] : [
    "",
    "# The vzip archive this page downloads: the hierarchy, in one file that refers to the",
    "# input's bytes. Host it, and refkv.zarr.open(url) reads it anywhere.",
    `# reference.save(${JSON.stringify(`${name}.vzip`)})`
  ];
  return [
    ...header,
    ...open,
    'root = zarr.open(store, mode="r")',
    "print(root.tree() if isinstance(root, zarr.Group) else root.info)",
    ...save,
    ""
  ].join("\n");
}

// ../demo/demo.ts
core_default.registerLanguage("python", python);
var $ = (id) => document.getElementById(id);
var input = $("url");
var status = $("status");
var setStatus = (text) => {
  status.replaceChildren(text);
  status.classList.remove("error");
};
var WorkerError = class extends Error {
  status;
  reason;
  constructor(status2, message, reason) {
    super(message);
    this.status = status2;
    this.reason = reason ?? void 0;
  }
};
function helpFor(e) {
  if (!(e instanceof WorkerError)) return "";
  switch (e.reason) {
    case "cors":
      return "The file's server does not let other sites read it from a browser. Its owner can allow it with CORS headers: Access-Control-Allow-Origin, and Access-Control-Expose-Headers for Content-Range, Content-Length and ETag. Python is not restricted by CORS: the script below zarrifies the file on your machine.";
    case "unreachable":
      return "Check the URL: the browser got no answer from its server.";
    case "mixed-content":
      return "Use the file's https:// URL, if its server has one.";
  }
  if (e.status === 422) return "The input was read, but it is not a format, or a form of one, that this page zarrifies.";
  if (e.status === 507) return "The store is larger than this page lists in a browser; the Python package has no such limit.";
  return "";
}
function showError(e) {
  const message = String(e.message ?? e);
  const title = document.createElement("strong");
  title.textContent = "Could not zarrify this input";
  const detail = document.createElement("p");
  detail.textContent = message;
  const help = document.createElement("p");
  help.className = "help";
  help.textContent = helpFor(e);
  status.replaceChildren(title, detail, ...help.textContent ? [help] : []);
  status.classList.add("error");
}
async function getJson(url2) {
  const r = await fetchWorker(url2);
  if (r.headers.get(WORKER_HEADER) === null) {
    throw new Error(
      `the refkv service worker did not answer this request (HTTP ${r.status} from the network); reload the page and try again`
    );
  }
  if (!r.ok) throw new WorkerError(r.status, await r.text(), r.headers.get(ERROR_HEADER));
  return r.json();
}
var SECONDS = { second: 1, millisecond: 1e-3, minute: 60, hour: 3600 };
var METERS = {
  meter: 1,
  millimeter: 1e-3,
  micrometer: 1e-6,
  nanometer: 1e-9,
  picometer: 1e-12,
  angstrom: 1e-10,
  centimeter: 0.01,
  inch: 0.0254,
  foot: 0.3048
};
function imageState(images, axes, scale, shape, dtype, omero = [], labels = [], flipY = false, start) {
  let xi = axes.findIndex((a) => a.name === "x");
  let yi = axes.findIndex((a) => a.name === "y");
  if (xi < 0 || yi < 0) [yi, xi] = [axes.length - 2, axes.length - 1];
  const scrolled = axes.find((a, i) => i !== xi && i !== yi && a.name !== "c" && shape[i] > 1);
  const dimensions = {};
  axes.forEach((a, i) => {
    if (a.name === "c") return;
    const unit = a.unit ?? "";
    if (unit in METERS) dimensions[a.name] = [scale[i] * METERS[unit], "m"];
    else if (unit in SECONDS) dimensions[a.name] = [scale[i] * SECONDS[unit], "s"];
    else dimensions[a.name] = [scale[i], ""];
  });
  const offset = (img, i) => (img.translation?.[i] ?? 0) / scale[i];
  const position = axes.flatMap((a, i) => {
    if (a.name === "c") return [];
    const at = offset(images[0], i);
    if (start !== void 0 && i !== xi && i !== yi) return [at + start[i]];
    if (a.name === "t" || a.name === "time") return [at];
    return [at + (a.name === "z" ? Math.floor(shape[i] / 2) : shape[i] / 2)];
  });
  const view = {
    dimensions,
    position,
    displayDimensions: [axes[xi].name, axes[yi].name, ...scrolled ? [scrolled.name] : []],
    // With the coordinate space declared, this counts full-resolution voxels
    // per screen pixel.
    crossSectionScale: Math.max(shape[yi] / 600, shape[xi] / 850),
    // half a turn about x, which reverses y
    ...flipY ? { crossSectionOrientation: [1, 0, 0, 0] } : {},
    layout: "xy"
  };
  const many = images.length > 1;
  const c = axes.findIndex((a) => a.name === "c");
  if (c >= 0 && shape[c] > 1 && shape[c] <= MAX_CHANNELS) {
    const outputDimensions = Object.fromEntries(
      axes.map((a) => a.name === "c" ? ["c^", [1, ""]] : [a.name, dimensions[a.name]])
    );
    const rgb = shape[c] === 3 && dtype === "uint8" && omero.length === 0;
    const shader = rgb ? RGB_SHADER : channelShader(shape[c], omero);
    return {
      layers: images.map((img) => ({
        type: "image",
        source: { url: img.url, transform: { outputDimensions } },
        name: many ? img.name : rgb ? "image" : "channels",
        opacity: 1,
        shader
      })),
      crossSectionBackgroundColor: "#000000",
      ...view
    };
  }
  return {
    layers: images.map((img) => ({ type: "image", source: img.url, name: many ? img.name : "image" })),
    ...view
  };
}
var MAX_CHANNELS = 16;
function neuroglancerState(...args) {
  const state = imageState(...args);
  const labels = args[6] ?? [];
  state.layers.push(...labels.map((l) => ({
    type: "segmentation",
    source: l.url,
    name: `labels ${l.name}`
  })));
  return state;
}
var RGB_SHADER = `void main() {
  emitRGB(vec3(toNormalized(getDataValue(0)), toNormalized(getDataValue(1)), toNormalized(getDataValue(2))));
}
`;
function channelShader(n, omero) {
  const used = /* @__PURE__ */ new Set();
  const ident = (label, k) => {
    let id = label.toLowerCase().replace(/[^a-z0-9_]/g, "_").replace(/^(?=[^a-z])/, "c");
    if (id === "" || id.length > 40 || used.has(id)) id = `channel${k}`;
    used.add(id);
    return id;
  };
  const controls = [];
  const sum = [];
  for (let k = 0; k < n; k++) {
    const ch = omero[k] ?? {};
    const id = ident(ch.label ?? `channel${k}`, k);
    const range = ch.window ? `, range=[${ch.window.start}, ${ch.window.end}]` : "";
    controls.push(
      `#uicontrol bool ${id}_on checkbox(default=true)`,
      `#uicontrol vec3 ${id}_color color(default="#${(ch.color ?? "FFFFFF").toLowerCase()}")`,
      `#uicontrol invlerp ${id}(channel=${k}${range})`
    );
    sum.push(`  if (${id}_on) rgb += ${id}_color * ${id}();`);
  }
  return `${controls.join("\n")}
void main() {
  vec3 rgb = vec3(0.0);
${sum.join("\n")}
  emitRGB(rgb);
}
`;
}
function translationOf(ms) {
  return ms?.datasets?.[0]?.coordinateTransformations?.find((t) => t.type === "translation")?.translation;
}
function chunkShapeOf(a) {
  const { name, configuration } = a.chunk_grid;
  if (name !== "rectilinear") return configuration.chunk_shape;
  return configuration.chunk_shapes.map(
    (lengths) => typeof lengths === "number" ? lengths : Math.max(...lengths.map((l) => Array.isArray(l) ? l[0] : l))
  );
}
async function omeView(url2, ms, label, withLabels = false) {
  const levels = await Promise.all(
    ms.datasets.map(async (d) => ({
      path: d.path,
      url: `${url2}${d.path}/`,
      meta: await getJson(`${url2}${d.path}/zarr.json`)
    }))
  );
  const scale = ms.datasets[0].coordinateTransformations?.find(
    (t) => t.type === "scale"
  )?.scale ?? levels[0].meta.shape.map(() => 1);
  const group = await getJson(`${url2}zarr.json`);
  let labels = [];
  if (withLabels) {
    try {
      const names = (await getJson(`${url2}labels/zarr.json`)).attributes?.ome?.labels ?? [];
      labels = names.map((n) => ({ name: n, url: `${url2}labels/${n}/` }));
    } catch {
    }
  }
  return {
    label,
    name: ms.name ?? label,
    url: url2,
    images: [{ url: url2, name: ms.name ?? label, translation: translationOf(ms) }],
    axes: ms.axes,
    scale,
    levels,
    omero: group.attributes?.ome?.omero?.channels ?? [],
    labels
  };
}
function arrayView(url2, path, meta) {
  const axes = meta.shape.map((_, i) => ({ name: meta.dimension_names?.[i] ?? `dim_${i}` }));
  const label = path === "" ? "the array" : path;
  return {
    label,
    name: label,
    url: url2,
    images: [{ url: url2, name: path || "array" }],
    axes,
    scale: axes.map(() => 1),
    levels: [{ path: path || "/", url: url2, meta }],
    omero: [],
    labels: []
  };
}
var SHOWN_TYPES = ["uint8", "int8", "uint16", "int16", "uint32", "int32", "uint64", "float32"];
var DECODED_CODECS = [
  "bytes",
  "transpose",
  "crc32c",
  "blosc",
  "zstd",
  "gzip",
  "sharding_indexed",
  "numcodecs.shuffle",
  "n5_default",
  "imagecodecs_jpeg",
  "imagecodecs_jpeg2k",
  "imagecodecs_jpegxr",
  "imagecodecs_lzw",
  "refkv.fits_tiles",
  "refkv.grib",
  "refkv.stream"
];
var FLOAT64_CODECS = ["refkv.grib"];
var codecNames = (codecs) => codecs.flatMap((c) => [c.name, ...codecNames(c.configuration?.codecs ?? []), ...codecNames(c.configuration?.index_codecs ?? [])]);
var showable = (meta) => meta.shape.length >= 2 && (SHOWN_TYPES.includes(meta.data_type) || meta.data_type === "float64" && meta.codecs.some((c) => FLOAT64_CODECS.includes(c.name))) && codecNames(meta.codecs).every((n) => DECODED_CODECS.includes(n));
var AUDIO = ["mp3", "flac"];
var DECODED_VIDEO = ["avc1", "hvc1", "hev1"];
async function videoViews(zarrUrl, mp4) {
  const video = (mp4.tracks ?? []).filter((t) => t.path !== null && t.handler === "vide");
  const planes = await Promise.all(video.map(async (t) => {
    const url2 = `${zarrUrl}${t.path}/y/`;
    return { t, url: url2, meta: DECODED_VIDEO.includes(t.codec) ? await getJson(`${url2}zarr.json`) : void 0 };
  }));
  const shown2 = planes.filter((p) => p.meta?.data_type === "uint8");
  const others = planes.filter((p) => p.meta?.data_type !== "uint8").map(({ t, meta }) => `${t.path} (${t.codec}${meta === void 0 ? "" : ", 10-bit"})`);
  if (shown2.length === 0 && others.length > 0) {
    throw new Error(`no 8-bit H.264 or HEVC track to show: Neuroglancer does not decode ${others.join(", ")}, which the archive holds`);
  }
  return shown2.map(({ t, url: url2, meta }) => {
    const view = arrayView(url2, `${t.path}/y`, meta);
    view.label = `${t.path} (luma)`;
    if (others.length > 0) view.note = `Not shown: ${others.join(", ")}, which Neuroglancer does not decode.`;
    return view;
  });
}
var before = (a, b) => {
  const i = a.findIndex((x, k) => x !== b[k]);
  return i >= 0 && a[i] < b[i];
};
var GRIB_FIRST = ["t_heightAboveGround", "t_surface", "t_isobaric"];
async function gribViews(zarrUrl) {
  const keys = await archiveKeys(zarrUrl);
  const arrays = (await listArrays(zarrUrl, keys)).filter(({ path, meta }) => path.includes("/") && showable(meta));
  const grids = /* @__PURE__ */ new Map();
  const views2 = await Promise.all(arrays.map(async ({ path, meta }) => {
    const grid = path.slice(0, path.indexOf("/"));
    if (!grids.has(grid)) grids.set(grid, getJson(`${zarrUrl}${grid}/zarr.json`));
    const transform2 = (await grids.get(grid)).attributes?.["spatial:transform"];
    const view = arrayView(`${zarrUrl}${path}/`, path, meta);
    view.flipY = (transform2?.[4] ?? 0) > 0;
    const fields2 = keys.filter((k) => k.startsWith(`${path}/c/`)).map((k) => k.slice(path.length + 3).split("/").map(Number));
    view.start = fields2.reduce((a, b) => before(b, a) ? b : a, fields2[0]);
    return view;
  }));
  const rank = (v) => {
    const k = GRIB_FIRST.indexOf(v.label.slice(v.label.indexOf("/") + 1));
    return k < 0 ? GRIB_FIRST.length : k;
  };
  return views2.sort((a, b) => rank(a) - rank(b));
}
async function seriesViews(zarrUrl) {
  const series = (await getJson(`${zarrUrl}OME/zarr.json`)).attributes?.ome?.series ?? [];
  const groups = await Promise.all(series.map((s) => getJson(`${zarrUrl}${s}/zarr.json`)));
  const views2 = await Promise.all(series.map((s, i) => {
    const ms = groups[i].attributes?.ome?.multiscales?.[0];
    return omeView(`${zarrUrl}${s}/`, ms, `series ${s}${ms?.name ? ` (${ms.name})` : ""}`);
  }));
  if (views2.length < 2) return views2;
  const key = (v) => {
    const m = v.levels[0].meta;
    const c = v.axes.findIndex((a) => a.name === "c");
    return JSON.stringify([v.axes.map((a) => a.name), m.data_type, c < 0 ? 0 : m.shape[c]]);
  };
  if (views2.some((v) => key(v) !== key(views2[0]))) {
    views2[0].note = `${views2.length} series of different axes, data types or channels: pick one.`;
    return views2;
  }
  const placed = views2.every((v) => v.images[0].translation !== void 0);
  const all = {
    ...views2[0],
    label: `all ${views2.length} series`,
    url: views2[0].url,
    images: views2.map((v) => v.images[0]),
    labels: [],
    note: `${views2.length} images (series ${series[0]}\u2013${series[series.length - 1]}), ` + (placed ? "placed at their stage positions; zoom out in Neuroglancer to see them all." : "without stage positions, so they overlap.")
  };
  return [all, ...views2];
}
async function archiveKeys(zarrUrl) {
  const r = await fetchWorker(archiveDownloadUrl(zarrUrl, "phkv"));
  if (!r.ok) throw new Error(`${r.status}: ${await r.text()}`);
  const archive = await openArchive(new Uint8Array(await r.arrayBuffer()), zarrUrl, () => {
    throw new Error("not read");
  });
  return archive.keys();
}
async function listArrays(zarrUrl, keys) {
  keys ??= await archiveKeys(zarrUrl);
  const paths = keys.filter((k) => (k === "zarr.json" || k.endsWith("/zarr.json")) && !k.startsWith("refkv_source/")).map((k) => k.slice(0, -"zarr.json".length).replace(/\/$/, ""));
  const nodes = await Promise.all(paths.map(async (path) => ({
    path,
    meta: await getJson(`${zarrUrl}${path === "" ? "" : `${path}/`}zarr.json`)
  })));
  return nodes.filter((n) => n.meta.node_type === "array");
}
var prefix;
var views = [];
function neuroglancerSource(shown2, url2) {
  if (!shown2.isArchive || !isVzipUrl(shown2.url)) return `${url2}|zarr3:`;
  if (!url2.startsWith(shown2.zarrUrl)) throw new Error(`${url2} is not under ${shown2.zarrUrl}`);
  const path = url2.slice(shown2.zarrUrl.length).split("/").map(encodeURIComponent).join("/");
  return `${shown2.url}|vzip:${path}|zarr3:`;
}
function showLevels(rows) {
  $("levels").replaceChildren(
    ...rows.map(({ path, meta: a }) => {
      const tr = document.createElement("tr");
      for (const v of [
        path,
        a.shape.join(" \xD7 "),
        chunkShapeOf(a).join(" \xD7 ") + (a.chunk_grid.name === "rectilinear" ? " (at most; rectilinear)" : ""),
        a.data_type,
        a.codecs.map((c) => c.name).join(", ")
      ]) {
        const td = document.createElement("td");
        td.textContent = v;
        tr.append(td);
      }
      return tr;
    })
  );
}
var shown;
async function showView(view) {
  shown = view;
  const source = (url2) => neuroglancerSource(view.input, url2);
  const linkable = view.input.isArchive && isVzipUrl(view.input.url);
  $("share-local").hidden = linkable;
  $("share-archive").hidden = !linkable;
  $("name").textContent = view.name;
  $("zarr-url").textContent = source(view.url);
  $("view-note").textContent = view.note ?? "";
  showLevels(view.levels);
  const level0 = view.levels[0].meta;
  const dataType = level0.data_type;
  const coarsest = view.levels[view.levels.length - 1];
  const sample = (channels) => sampleRanges(coarsest.url, coarsest.meta, view.axes, chunkShapeOf(coarsest.meta), channels, view.start);
  let omero = view.omero;
  const c = view.axes.findIndex((a) => a.name === "c");
  const nc = c >= 0 ? level0.shape[c] : 0;
  if (dataType !== "uint8" && nc > 1 && nc <= MAX_CHANNELS) {
    const need = Array.from({ length: nc }, (_, k) => k).filter((k) => !usableWindow(omero[k]?.window, dataType));
    const ranges = need.length > 0 ? await sample(need) : [];
    omero = Array.from({ length: nc }, (_, k) => {
      const ch = omero[k] ?? {};
      if (usableWindow(ch.window, dataType)) return ch;
      const r = ranges[need.indexOf(k)];
      if (r !== void 0) return { ...ch, window: { start: r[0], end: r[1] } };
      return { ...ch, window: ch.window && !tooNarrow(ch.window, dataType) ? ch.window : void 0 };
    });
  }
  const state = neuroglancerState(
    view.images.map((img) => ({ ...img, url: source(img.url) })),
    view.axes,
    view.scale,
    level0.shape,
    dataType,
    omero,
    view.labels.map((l) => ({ ...l, url: source(l.url) })),
    view.flipY,
    view.start
  );
  const plain = state.layers.filter((l) => l.type === "image" && !("shader" in l));
  if (plain.length > 0 && dataType !== "uint8") {
    const [range] = await sample();
    if (range !== void 0) {
      for (const l of plain) {
        Object.assign(l, { shader: `#uicontrol invlerp normalized(range=[${range[0]}, ${range[1]}])
void main() {
  emitGrayscale(normalized());
}
` });
      }
    }
  }
  if (shown !== view) return;
  const ng = $("open-ng");
  ng.hidden = false;
  ng.href = new URL(`neuroglancer/#!${encodeURIComponent(JSON.stringify(state))}`, location.href).href;
}
var pythonUrl;
function mediaProfile(url2) {
  const ext = new URL(url2).pathname.toLowerCase().match(/\.(\w+)$/)?.[1];
  return ext === "mp3" ? "mp3" : ext === "flac" ? "flac" : ext && ["mp4", "mov", "m4a", "m4v"].includes(ext) ? "mp4" : void 0;
}
function showPython(input2, profile) {
  const script = pythonScript(input2.url, input2.isArchive, profile, "0.2.0", "phkv");
  const file = `${input2.isArchive ? "open" : "zarrify"}_${stem(input2.url)}.py`;
  $("python-code").innerHTML = core_default.highlight(script, { language: "python" }).value;
  $("python-run").textContent = `uv run ${file}`;
  if (pythonUrl) URL.revokeObjectURL(pythonUrl);
  pythonUrl = URL.createObjectURL(new Blob([script], { type: "text/x-python" }));
  const save = $("python-save");
  save.href = pythonUrl;
  save.download = file;
}
async function zarrify(url2) {
  $("result").hidden = true;
  $("python").hidden = true;
  const here = new URL(location.href);
  here.searchParams.set("url", url2);
  history.replaceState(null, "", here);
  setStatus("Starting the service worker\u2026");
  status.scrollIntoView({ block: "nearest", behavior: "smooth" });
  prefix ??= registerVzipWorker(new URL("vzip-sw.js", location.href));
  const p = await prefix;
  const isArchive = isArchiveUrl(url2);
  const zarrUrl = isArchive ? archiveZarrUrl(p, url2) : imageZarrUrl(p, url2);
  const opened = { url: url2, zarrUrl, isArchive };
  setStatus(isArchive ? "Opening the archive\u2026" : "Reading the file's structure\u2026");
  const t0 = performance.now();
  const root = await getJson(`${zarrUrl}zarr.json`);
  const ms = Math.round(performance.now() - t0);
  const attrs = root.attributes ?? {};
  const map = $("open-map");
  const picker = $("view");
  map.hidden = true;
  $("view-row").hidden = true;
  if (attrs.refkv_zarrified?.profile === "safe") {
    const safe3 = attrs.refkv_zarrified.safe ?? {};
    views = [];
    $("name").textContent = `${safe3.PRODUCT_URI ?? url2.split("/").pop()} (${safe3.PROCESSING_LEVEL ?? "Sentinel-2"})`;
    $("zarr-url").textContent = neuroglancerSource(opened, zarrUrl);
    $("view-note").textContent = `${safe3.SENSING_TIME ?? ""} ${attrs["proj:code"] ?? ""}`;
    showLevels(await listArrays(zarrUrl));
    $("open-ng").hidden = true;
    $("share-local").hidden = true;
    $("share-archive").hidden = true;
    map.hidden = false;
    map.href = new URL(`map.html?url=${encodeURIComponent(url2)}`, location.href).href;
  } else if (AUDIO.includes(attrs.refkv_zarrified?.profile)) {
    const info = attrs.refkv_zarrified[attrs.refkv_zarrified.profile] ?? {};
    views = [];
    const file = url2.split("?")[0].split("/").pop();
    try {
      $("name").textContent = decodeURIComponent(file);
    } catch {
      $("name").textContent = file;
    }
    $("zarr-url").textContent = neuroglancerSource(opened, zarrUrl);
    const rate = info.sample_rate;
    $("view-note").textContent = `Audio${rate ? ` at ${rate} Hz` : ""}: not shown here. zarr-python reads the samples from the downloaded archive, with refkv's media extra.`;
    showLevels(await listArrays(zarrUrl));
    $("open-ng").hidden = true;
    $("share-local").hidden = true;
    $("share-archive").hidden = true;
  } else {
    const ms0 = attrs.ome?.multiscales?.[0];
    let found;
    if (root.node_type === "array") {
      found = [arrayView(zarrUrl, "", root)];
    } else if (attrs.refkv_zarrified?.profile === "mp4") {
      found = await videoViews(zarrUrl, attrs.refkv_zarrified.mp4 ?? {});
      if (found.length === 0) throw new Error("no video track to show (audio is not displayed)");
    } else if (ms0 !== void 0) {
      found = [await omeView(zarrUrl, ms0, ms0.name ?? "image", attrs.refkv_zarrified?.profile === "ome-zarr")];
    } else if (attrs.ome?.["bioformats2raw.layout"] !== void 0) {
      found = await seriesViews(zarrUrl);
    } else if (attrs.refkv_zarrified?.profile === "grib") {
      found = await gribViews(zarrUrl);
      if (found.length === 0) throw new Error("no GRIB variable to show");
    } else {
      const arrays = (await listArrays(zarrUrl)).filter(({ meta }) => showable(meta));
      if (attrs.refkv_zarrified?.profile === "hdf5") {
        const size = (meta) => meta.shape.reduce((a, b) => a * b, 1);
        const image = (meta) => {
          const [h, w] = meta.shape.slice(-2);
          return Math.min(h, w) >= 64 && Math.max(h, w) <= 8 * Math.min(h, w);
        };
        arrays.sort((a, b) => Number(image(b.meta)) - Number(image(a.meta)) || size(b.meta) - size(a.meta));
      }
      found = arrays.slice(0, 50).map(({ path, meta }) => arrayView(`${zarrUrl}${path}/`, path, meta));
      if (found.length === 0) throw new Error("no arrays to show (Neuroglancer shows arrays of two or more axes)");
      if (arrays.length > found.length) {
        for (const v of found) v.note = `${found.length} of the ${arrays.length} arrays Neuroglancer can show are listed.`;
      }
    }
    views = found.map((v) => ({ ...v, input: opened }));
    if (views.length > 1) {
      picker.replaceChildren(...views.map((v, i) => new Option(v.label, String(i))));
      $("view-row").hidden = false;
    }
    await showView(views[0]);
  }
  $("download").href = archiveDownloadUrl(zarrUrl, "phkv");
  showPython(opened, attrs.refkv_zarrified?.profile);
  $("result").hidden = false;
  $("python").hidden = isArchive && !isVzipUrl(url2);
  setStatus(`Ready in ${ms} ms.`);
}
$("python-copy").addEventListener("click", () => {
  navigator.clipboard.writeText($("python-code").textContent ?? "").then(
    () => $("python-copy").textContent = "Copied",
    () => $("python-copy").textContent = "Copy failed"
  );
  setTimeout(() => $("python-copy").textContent = "Copy", 2e3);
});
$("view").addEventListener("change", () => {
  showView(views[Number($("view").value)]).catch(showError);
});
$("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const url2 = input.value.trim();
  zarrify(url2).catch((e) => {
    showError(e);
    if (e instanceof WorkerError && e.reason === "cors") {
      showPython({ url: url2, zarrUrl: "", isArchive: isArchiveUrl(url2) }, mediaProfile(url2));
      $("python").hidden = isArchiveUrl(url2) && !isVzipUrl(url2);
    }
  });
});
for (const link of document.querySelectorAll("a[data-url]")) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    input.value = link.dataset.url;
    $("form").requestSubmit();
  });
}
var fromQuery = new URLSearchParams(location.search).get("url");
if (fromQuery) {
  input.value = fromQuery;
  $("form").requestSubmit();
}
//# sourceMappingURL=demo.js.map
