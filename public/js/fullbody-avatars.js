(function (G, $) {
  typeof exports == "object" && typeof module != "undefined"
    ? $(require("three"))
    : typeof define == "function" && define.amd
    ? define(["three"], $)
    : ((G = typeof globalThis != "undefined" ? globalThis : G || self),
      $(G.THREE));
})(this, function (G) {
  "use strict";
  function $(e) {
    if (e && e.__esModule) return e;
    var t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    return (
      e &&
        Object.keys(e).forEach(function (o) {
          if (o !== "default") {
            var r = Object.getOwnPropertyDescriptor(e, o);
            Object.defineProperty(
              t,
              o,
              r.get
                ? r
                : {
                    enumerable: !0,
                    get: function () {
                      return e[o];
                    },
                  }
            );
          }
        }),
      (t.default = e),
      Object.freeze(t)
    );
  }
  var i = $(G);
  /*! (c) 2019-2021 pixiv Inc. - https://github.com/pixiv/three-vrm/blob/release/LICENSE */ /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */ function O(
    e,
    t,
    o,
    r
  ) {
    return new (o || (o = Promise))(function (a, s) {
      function n(c) {
        try {
          d(r.next(c));
        } catch (u) {
          s(u);
        }
      }
      function l(c) {
        try {
          d(r.throw(c));
        } catch (u) {
          s(u);
        }
      }
      function d(c) {
        var u;
        c.done
          ? a(c.value)
          : ((u = c.value),
            u instanceof o
              ? u
              : new o(function (L) {
                  L(u);
                })).then(n, l);
      }
      d((r = r.apply(e, t || [])).next());
    });
  }
  var At;
  (function (e) {
    (e[(e.NUMBER = 0)] = "NUMBER"),
      (e[(e.VECTOR2 = 1)] = "VECTOR2"),
      (e[(e.VECTOR3 = 2)] = "VECTOR3"),
      (e[(e.VECTOR4 = 3)] = "VECTOR4"),
      (e[(e.COLOR = 4)] = "COLOR");
  })(At || (At = {})),
    new i.Vector2(),
    new i.Vector3(),
    new i.Vector4(),
    new i.Color();
  var Rt;
  (function (e) {
    var t, o, r, a, s, n;
    ((t = e.BlendShapePresetName || (e.BlendShapePresetName = {})).A = "a"),
      (t.Angry = "angry"),
      (t.Blink = "blink"),
      (t.BlinkL = "blink_l"),
      (t.BlinkR = "blink_r"),
      (t.E = "e"),
      (t.Fun = "fun"),
      (t.I = "i"),
      (t.Joy = "joy"),
      (t.Lookdown = "lookdown"),
      (t.Lookleft = "lookleft"),
      (t.Lookright = "lookright"),
      (t.Lookup = "lookup"),
      (t.Neutral = "neutral"),
      (t.O = "o"),
      (t.Sorrow = "sorrow"),
      (t.U = "u"),
      (t.Unknown = "unknown"),
      ((o =
        e.FirstPersonLookAtTypeName ||
        (e.FirstPersonLookAtTypeName = {})).BlendShape = "BlendShape"),
      (o.Bone = "Bone"),
      ((r = e.HumanoidBoneName || (e.HumanoidBoneName = {})).Chest = "chest"),
      (r.Head = "head"),
      (r.Hips = "hips"),
      (r.Jaw = "jaw"),
      (r.LeftEye = "leftEye"),
      (r.LeftFoot = "leftFoot"),
      (r.LeftHand = "leftHand"),
      (r.LeftIndexDistal = "leftIndexDistal"),
      (r.LeftIndexIntermediate = "leftIndexIntermediate"),
      (r.LeftIndexProximal = "leftIndexProximal"),
      (r.LeftLittleDistal = "leftLittleDistal"),
      (r.LeftLittleIntermediate = "leftLittleIntermediate"),
      (r.LeftLittleProximal = "leftLittleProximal"),
      (r.LeftLowerArm = "leftLowerArm"),
      (r.LeftLowerLeg = "leftLowerLeg"),
      (r.LeftMiddleDistal = "leftMiddleDistal"),
      (r.LeftMiddleIntermediate = "leftMiddleIntermediate"),
      (r.LeftMiddleProximal = "leftMiddleProximal"),
      (r.LeftRingDistal = "leftRingDistal"),
      (r.LeftRingIntermediate = "leftRingIntermediate"),
      (r.LeftRingProximal = "leftRingProximal"),
      (r.LeftShoulder = "leftShoulder"),
      (r.LeftThumbDistal = "leftThumbDistal"),
      (r.LeftThumbIntermediate = "leftThumbIntermediate"),
      (r.LeftThumbProximal = "leftThumbProximal"),
      (r.LeftToes = "leftToes"),
      (r.LeftUpperArm = "leftUpperArm"),
      (r.LeftUpperLeg = "leftUpperLeg"),
      (r.Neck = "neck"),
      (r.RightEye = "rightEye"),
      (r.RightFoot = "rightFoot"),
      (r.RightHand = "rightHand"),
      (r.RightIndexDistal = "rightIndexDistal"),
      (r.RightIndexIntermediate = "rightIndexIntermediate"),
      (r.RightIndexProximal = "rightIndexProximal"),
      (r.RightLittleDistal = "rightLittleDistal"),
      (r.RightLittleIntermediate = "rightLittleIntermediate"),
      (r.RightLittleProximal = "rightLittleProximal"),
      (r.RightLowerArm = "rightLowerArm"),
      (r.RightLowerLeg = "rightLowerLeg"),
      (r.RightMiddleDistal = "rightMiddleDistal"),
      (r.RightMiddleIntermediate = "rightMiddleIntermediate"),
      (r.RightMiddleProximal = "rightMiddleProximal"),
      (r.RightRingDistal = "rightRingDistal"),
      (r.RightRingIntermediate = "rightRingIntermediate"),
      (r.RightRingProximal = "rightRingProximal"),
      (r.RightShoulder = "rightShoulder"),
      (r.RightThumbDistal = "rightThumbDistal"),
      (r.RightThumbIntermediate = "rightThumbIntermediate"),
      (r.RightThumbProximal = "rightThumbProximal"),
      (r.RightToes = "rightToes"),
      (r.RightUpperArm = "rightUpperArm"),
      (r.RightUpperLeg = "rightUpperLeg"),
      (r.Spine = "spine"),
      (r.UpperChest = "upperChest"),
      ((a = e.MetaAllowedUserName || (e.MetaAllowedUserName = {})).Everyone =
        "Everyone"),
      (a.ExplicitlyLicensedPerson = "ExplicitlyLicensedPerson"),
      (a.OnlyAuthor = "OnlyAuthor"),
      ((s = e.MetaUssageName || (e.MetaUssageName = {})).Allow = "Allow"),
      (s.Disallow = "Disallow"),
      ((n = e.MetaLicenseName || (e.MetaLicenseName = {})).Cc0 = "CC0"),
      (n.CcBy = "CC_BY"),
      (n.CcByNc = "CC_BY_NC"),
      (n.CcByNcNd = "CC_BY_NC_ND"),
      (n.CcByNcSa = "CC_BY_NC_SA"),
      (n.CcByNd = "CC_BY_ND"),
      (n.CcBySa = "CC_BY_SA"),
      (n.Other = "Other"),
      (n.RedistributionProhibited = "Redistribution_Prohibited");
  })(Rt || (Rt = {}));
  const Qe = new i.Vector3(),
    Ee = new i.Vector3();
  function mt(e, t) {
    return e.matrixWorld.decompose(Qe, t, Ee), t;
  }
  new i.Quaternion(),
    Object.freeze(new i.Vector3(0, 0, -1)),
    new i.Quaternion();
  var St;
  (function (e) {
    (e[(e.Auto = 0)] = "Auto"),
      (e[(e.Both = 1)] = "Both"),
      (e[(e.ThirdPersonOnly = 2)] = "ThirdPersonOnly"),
      (e[(e.FirstPersonOnly = 3)] = "FirstPersonOnly");
  })(St || (St = {}));
  function Ce(e) {
    return e.invert ? e.invert() : e.inverse(), e;
  }
  new i.Vector3(), new i.Quaternion();
  const Ne = Object.freeze(new i.Vector3(0, 0, -1)),
    qe = new i.Vector3(),
    Oe = new i.Vector3(),
    Ue = new i.Vector3(),
    kt = new i.Quaternion();
  class it {
    constructor(t, o) {
      (this.autoUpdate = !0),
        (this._euler = new i.Euler(0, 0, 0, it.EULER_ORDER)),
        (this.firstPerson = t),
        (this.applyer = o);
    }
    getLookAtWorldDirection(t) {
      const o = mt(this.firstPerson.firstPersonBone, kt);
      return t.copy(Ne).applyEuler(this._euler).applyQuaternion(o);
    }
    lookAt(t) {
      this._calcEuler(this._euler, t),
        this.applyer && this.applyer.lookAt(this._euler);
    }
    update(t) {
      this.target &&
        this.autoUpdate &&
        (this.lookAt(this.target.getWorldPosition(qe)),
        this.applyer && this.applyer.lookAt(this._euler));
    }
    _calcEuler(t, o) {
      const r = this.firstPerson.getFirstPersonWorldPosition(Oe),
        a = Ue.copy(o).sub(r).normalize();
      return (
        a.applyQuaternion(Ce(mt(this.firstPerson.firstPersonBone, kt))),
        (t.x = Math.atan2(a.y, Math.sqrt(a.x * a.x + a.z * a.z))),
        (t.y = Math.atan2(-a.x, -a.z)),
        t
      );
    }
  }
  (it.EULER_ORDER = "YXZ"), new i.Euler(0, 0, 0, it.EULER_ORDER);
  var Ft, Wt, Vt, Ht, Dt;
  (function (e) {
    (e[(e.Off = 0)] = "Off"),
      (e[(e.Front = 1)] = "Front"),
      (e[(e.Back = 2)] = "Back");
  })(Ft || (Ft = {})),
    (function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.Normal = 1)] = "Normal"),
        (e[(e.LitShadeRate = 2)] = "LitShadeRate"),
        (e[(e.UV = 3)] = "UV");
    })(Wt || (Wt = {})),
    (function (e) {
      (e[(e.FixedColor = 0)] = "FixedColor"),
        (e[(e.MixedLighting = 1)] = "MixedLighting");
    })(Vt || (Vt = {})),
    (function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.WorldCoordinates = 1)] = "WorldCoordinates"),
        (e[(e.ScreenCoordinates = 2)] = "ScreenCoordinates");
    })(Ht || (Ht = {})),
    (function (e) {
      (e[(e.Opaque = 0)] = "Opaque"),
        (e[(e.Cutout = 1)] = "Cutout"),
        (e[(e.Transparent = 2)] = "Transparent"),
        (e[(e.TransparentWithZWrite = 3)] = "TransparentWithZWrite");
    })(Dt || (Dt = {}));
  var It;
  (function (e) {
    (e[(e.Opaque = 0)] = "Opaque"),
      (e[(e.Cutout = 1)] = "Cutout"),
      (e[(e.Transparent = 2)] = "Transparent"),
      (e[(e.TransparentWithZWrite = 3)] = "TransparentWithZWrite");
  })(It || (It = {}));
  const ze = new i.Matrix4();
  function Bt(e) {
    return e.invert ? e.invert() : e.getInverse(ze.copy(e)), e;
  }
  class je {
    constructor(t) {
      (this._inverseCache = new i.Matrix4()),
        (this._shouldUpdateInverse = !0),
        (this.matrix = t);
      const o = {
        set: (r, a, s) => ((this._shouldUpdateInverse = !0), (r[a] = s), !0),
      };
      (this._originalElements = t.elements),
        (t.elements = new Proxy(t.elements, o));
    }
    get inverse() {
      return (
        this._shouldUpdateInverse &&
          (Bt(this._inverseCache.copy(this.matrix)),
          (this._shouldUpdateInverse = !1)),
        this._inverseCache
      );
    }
    revert() {
      this.matrix.elements = this._originalElements;
    }
  }
  const Ge = Object.freeze(new i.Matrix4()),
    $e = Object.freeze(new i.Quaternion()),
    U = new i.Vector3(),
    Qt = new i.Vector3(),
    Ye = new i.Vector3(),
    Ze = new i.Quaternion(),
    v = new i.Matrix4(),
    rt = new i.Matrix4();
  class Je {
    constructor(t, o = {}) {
      var r, a, s, n, l, d;
      if (
        ((this._currentTail = new i.Vector3()),
        (this._prevTail = new i.Vector3()),
        (this._nextTail = new i.Vector3()),
        (this._boneAxis = new i.Vector3()),
        (this._centerSpacePosition = new i.Vector3()),
        (this._center = null),
        (this._parentWorldRotation = new i.Quaternion()),
        (this._initialLocalMatrix = new i.Matrix4()),
        (this._initialLocalRotation = new i.Quaternion()),
        (this._initialLocalChildPosition = new i.Vector3()),
        (this.bone = t),
        (this.bone.matrixAutoUpdate = !1),
        (this.radius = (r = o.radius) !== null && r !== void 0 ? r : 0.02),
        (this.stiffnessForce =
          (a = o.stiffnessForce) !== null && a !== void 0 ? a : 1),
        (this.gravityDir = o.gravityDir
          ? new i.Vector3().copy(o.gravityDir)
          : new i.Vector3().set(0, -1, 0)),
        (this.gravityPower =
          (s = o.gravityPower) !== null && s !== void 0 ? s : 0),
        (this.dragForce = (n = o.dragForce) !== null && n !== void 0 ? n : 0.4),
        (this.colliders = (l = o.colliders) !== null && l !== void 0 ? l : []),
        this._centerSpacePosition.setFromMatrixPosition(this.bone.matrixWorld),
        this._initialLocalMatrix.copy(this.bone.matrix),
        this._initialLocalRotation.copy(this.bone.quaternion),
        this.bone.children.length === 0)
      )
        this._initialLocalChildPosition
          .copy(this.bone.position)
          .normalize()
          .multiplyScalar(0.07);
      else {
        const c = this.bone.children[0];
        this._initialLocalChildPosition.copy(c.position);
      }
      this.bone.localToWorld(
        this._currentTail.copy(this._initialLocalChildPosition)
      ),
        this._prevTail.copy(this._currentTail),
        this._nextTail.copy(this._currentTail),
        this._boneAxis.copy(this._initialLocalChildPosition).normalize(),
        (this._centerSpaceBoneLength = U.copy(this._initialLocalChildPosition)
          .applyMatrix4(this.bone.matrixWorld)
          .sub(this._centerSpacePosition)
          .length()),
        (this.center = (d = o.center) !== null && d !== void 0 ? d : null);
    }
    get center() {
      return this._center;
    }
    set center(t) {
      var o;
      this._getMatrixCenterToWorld(v),
        this._currentTail.applyMatrix4(v),
        this._prevTail.applyMatrix4(v),
        this._nextTail.applyMatrix4(v),
        !((o = this._center) === null || o === void 0) &&
          o.userData.inverseCacheProxy &&
          (this._center.userData.inverseCacheProxy.revert(),
          delete this._center.userData.inverseCacheProxy),
        (this._center = t),
        this._center &&
          (this._center.userData.inverseCacheProxy ||
            (this._center.userData.inverseCacheProxy = new je(
              this._center.matrixWorld
            ))),
        this._getMatrixWorldToCenter(v),
        this._currentTail.applyMatrix4(v),
        this._prevTail.applyMatrix4(v),
        this._nextTail.applyMatrix4(v),
        v.multiply(this.bone.matrixWorld),
        this._centerSpacePosition.setFromMatrixPosition(v),
        (this._centerSpaceBoneLength = U.copy(this._initialLocalChildPosition)
          .applyMatrix4(v)
          .sub(this._centerSpacePosition)
          .length());
    }
    reset() {
      this.bone.quaternion.copy(this._initialLocalRotation),
        this.bone.updateMatrix(),
        this.bone.matrixWorld.multiplyMatrices(
          this._getParentMatrixWorld(),
          this.bone.matrix
        ),
        this._centerSpacePosition.setFromMatrixPosition(this.bone.matrixWorld),
        this.bone.localToWorld(
          this._currentTail.copy(this._initialLocalChildPosition)
        ),
        this._prevTail.copy(this._currentTail),
        this._nextTail.copy(this._currentTail);
    }
    update(t) {
      if (t <= 0) return;
      this.bone.parent
        ? mt(this.bone.parent, this._parentWorldRotation)
        : this._parentWorldRotation.copy($e),
        this._getMatrixWorldToCenter(v),
        v.multiply(this.bone.matrixWorld),
        this._centerSpacePosition.setFromMatrixPosition(v),
        this._getMatrixWorldToCenter(rt),
        rt.multiply(this._getParentMatrixWorld());
      const o = this.stiffnessForce * t,
        r = Qt.copy(this.gravityDir).multiplyScalar(this.gravityPower * t);
      this._nextTail
        .copy(this._currentTail)
        .add(
          U.copy(this._currentTail)
            .sub(this._prevTail)
            .multiplyScalar(1 - this.dragForce)
        )
        .add(
          U.copy(this._boneAxis)
            .applyMatrix4(this._initialLocalMatrix)
            .applyMatrix4(rt)
            .sub(this._centerSpacePosition)
            .normalize()
            .multiplyScalar(o)
        )
        .add(r),
        this._nextTail
          .sub(this._centerSpacePosition)
          .normalize()
          .multiplyScalar(this._centerSpaceBoneLength)
          .add(this._centerSpacePosition),
        this._collision(this._nextTail),
        this._prevTail.copy(this._currentTail),
        this._currentTail.copy(this._nextTail);
      const a = Bt(v.copy(rt.multiply(this._initialLocalMatrix))),
        s = Ze.setFromUnitVectors(
          this._boneAxis,
          U.copy(this._nextTail).applyMatrix4(a).normalize()
        );
      this.bone.quaternion.copy(this._initialLocalRotation).multiply(s),
        this.bone.updateMatrix(),
        this.bone.matrixWorld.multiplyMatrices(
          this._getParentMatrixWorld(),
          this.bone.matrix
        );
    }
    _collision(t) {
      this.colliders.forEach((o) => {
        this._getMatrixWorldToCenter(v), v.multiply(o.matrixWorld);
        const r = U.setFromMatrixPosition(v),
          a = o.geometry.boundingSphere.radius,
          s = this.radius + a;
        if (t.distanceToSquared(r) <= s * s) {
          const n = Qt.subVectors(t, r).normalize(),
            l = Ye.addVectors(r, n.multiplyScalar(s));
          t.copy(
            l
              .sub(this._centerSpacePosition)
              .normalize()
              .multiplyScalar(this._centerSpaceBoneLength)
              .add(this._centerSpacePosition)
          );
        }
      });
    }
    _getMatrixCenterToWorld(t) {
      return this._center ? t.copy(this._center.matrixWorld) : t.identity(), t;
    }
    _getMatrixWorldToCenter(t) {
      return (
        this._center
          ? t.copy(this._center.userData.inverseCacheProxy.inverse)
          : t.identity(),
        t
      );
    }
    _getParentMatrixWorld() {
      return this.bone.parent ? this.bone.parent.matrixWorld : Ge;
    }
  }
  class Xe {
    constructor(t, o) {
      (this.colliderGroups = []),
        (this.springBoneGroupList = []),
        (this.colliderGroups = t),
        (this.springBoneGroupList = o);
    }
    setCenter(t) {
      this.springBoneGroupList.forEach((o) => {
        o.forEach((r) => {
          r.center = t;
        });
      });
    }
    lateUpdate(t) {
      const o = new Set();
      this.springBoneGroupList.forEach((r) => {
        r.forEach((a) => {
          this._updateWorldMatrix(o, a.bone), a.update(t);
        });
      });
    }
    reset() {
      const t = new Set();
      this.springBoneGroupList.forEach((o) => {
        o.forEach((r) => {
          this._updateWorldMatrix(t, r.bone), r.reset();
        });
      });
    }
    _updateWorldMatrix(t, o) {
      t.has(o) ||
        (o.parent && this._updateWorldMatrix(t, o.parent),
        o.updateWorldMatrix(!1, !1),
        t.add(o));
    }
  }
  const Ke = new i.Vector3(),
    t0 = new i.MeshBasicMaterial({ visible: !1 });
  class e0 {
    import(t) {
      var o;
      return O(this, void 0, void 0, function* () {
        const r =
          (o = t.parser.json.extensions) === null || o === void 0
            ? void 0
            : o.VRM;
        if (!r) return null;
        const a = r.secondaryAnimation;
        if (!a) return null;
        const s = yield this._importColliderMeshGroups(t, a),
          n = yield this._importSpringBoneGroupList(t, a, s);
        return new Xe(s, n);
      });
    }
    _createSpringBone(t, o = {}) {
      return new Je(t, o);
    }
    _importSpringBoneGroupList(t, o, r) {
      return O(this, void 0, void 0, function* () {
        const a = o.boneGroups || [],
          s = [];
        return (
          yield Promise.all(
            a.map((n) =>
              O(this, void 0, void 0, function* () {
                if (
                  n.stiffiness === void 0 ||
                  n.gravityDir === void 0 ||
                  n.gravityDir.x === void 0 ||
                  n.gravityDir.y === void 0 ||
                  n.gravityDir.z === void 0 ||
                  n.gravityPower === void 0 ||
                  n.dragForce === void 0 ||
                  n.hitRadius === void 0 ||
                  n.colliderGroups === void 0 ||
                  n.bones === void 0 ||
                  n.center === void 0
                )
                  return;
                const l = n.stiffiness,
                  d = new i.Vector3(
                    n.gravityDir.x,
                    n.gravityDir.y,
                    -n.gravityDir.z
                  ),
                  c = n.gravityPower,
                  u = n.dragForce,
                  L = n.hitRadius,
                  m = [];
                n.colliderGroups.forEach((S) => {
                  m.push(...r[S].colliders);
                });
                const M = [];
                yield Promise.all(
                  n.bones.map((S) =>
                    O(this, void 0, void 0, function* () {
                      const k = yield t.parser.getDependency("node", S),
                        D =
                          n.center !== -1
                            ? yield t.parser.getDependency("node", n.center)
                            : null;
                      k &&
                        k.traverse((g) => {
                          const x = this._createSpringBone(g, {
                            radius: L,
                            stiffnessForce: l,
                            gravityDir: d,
                            gravityPower: c,
                            dragForce: u,
                            colliders: m,
                            center: D,
                          });
                          M.push(x);
                        });
                    })
                  )
                ),
                  s.push(M);
              })
            )
          ),
          s
        );
      });
    }
    _importColliderMeshGroups(t, o) {
      return O(this, void 0, void 0, function* () {
        const r = o.colliderGroups;
        if (r === void 0) return [];
        const a = [];
        return (
          r.forEach((s) =>
            O(this, void 0, void 0, function* () {
              if (s.node === void 0 || s.colliders === void 0) return;
              const n = yield t.parser.getDependency("node", s.node),
                l = [];
              s.colliders.forEach((c) => {
                if (
                  c.offset === void 0 ||
                  c.offset.x === void 0 ||
                  c.offset.y === void 0 ||
                  c.offset.z === void 0 ||
                  c.radius === void 0
                )
                  return;
                const u = Ke.set(c.offset.x, c.offset.y, -c.offset.z),
                  L = this._createColliderMesh(c.radius, u);
                n.add(L), l.push(L);
              });
              const d = { node: s.node, colliders: l };
              a.push(d);
            })
          ),
          a
        );
      });
    }
    _createColliderMesh(t, o) {
      const r = new i.Mesh(new i.SphereBufferGeometry(t, 8, 4), t0);
      return (
        r.position.copy(o),
        (r.name = "vrmColliderSphere"),
        r.geometry.computeBoundingSphere(),
        r
      );
    }
  }
  new i.Vector2(), new i.OrthographicCamera(-1, 1, -1, 1, -1, 1);
  const i0 = new i.MeshBasicMaterial({ color: 16777215, side: i.DoubleSide }),
    r0 = new i.Mesh(new i.PlaneBufferGeometry(2, 2), i0);
  new i.Scene().add(r0),
    new i.Vector3(),
    new i.MeshBasicMaterial({
      color: 16711935,
      wireframe: !0,
      transparent: !0,
      depthTest: !1,
    }),
    new i.Vector3();
  function o0(e, t) {
    if (((t = t || {}), Et(e, t), t.exclude)) {
      var o = [e];
      e.traverse((r) => o.push(r)),
        o.forEach((r) => {
          (~t.exclude.indexOf(r.id) || ~t.exclude.indexOf(r.name)) &&
            delete t.averagedDirs[r.id];
        });
    }
    return s0(e, t);
  }
  const n0 = new i.Quaternion();
  new i.Vector3(0, 1, 0);
  function Et(e, t) {
    return (
      (t = t || e),
      (t.worldPos = t.worldPos || {}),
      (t.averagedDirs = t.averagedDirs || {}),
      (t.preRotations = t.preRotations || {}),
      qt(e, t.worldPos),
      Ct(e, t.worldPos, t.averagedDirs),
      t
    );
  }
  function s0(e, t) {
    return (
      (!t || !t.worldPos) && ((t = t || {}), Et(e, t)),
      Nt(e, t.worldPos, t.averagedDirs, t.preRotations),
      t
    );
  }
  function Ct(e, t, o) {
    var r = new i.Vector3();
    e.children.forEach((a) => {
      var s = t[a.id][0];
      r.add(s);
    }),
      r.multiplyScalar(1 / e.children.length),
      (o[e.id] = r),
      e.children.forEach((a) => {
        Ct(a, t, o);
      });
  }
  function Nt(e, t, o, r) {
    var a = o[e.id];
    a && (e.quaternion.copy(n0), e.updateMatrixWorld());
    var s = r[e.id] || r[e.name];
    s && e.quaternion.multiply(s),
      e.updateMatrixWorld(),
      e.children.forEach((n) => {
        var l = t[n.id][0].clone();
        e.worldToLocal(l), n.position.copy(l);
      }),
      e.children.forEach((n) => {
        Nt(n, t, o, r);
      });
  }
  new i.Vector3(), new i.Vector3(), new i.Vector3(), new i.Matrix4();
  function qt(e, t) {
    var o = e.getWorldPosition(new i.Vector3());
    (t[e.id] = [o]),
      e.children.forEach((r) => {
        qt(r, t);
      });
  }
  class a0 {
    constructor() {
      (this.head = new i.Object3D()),
        (this.leftHand = new i.Object3D()),
        (this.leftHand.pointer = 0),
        (this.leftHand.grip = 0),
        (this.rightHand = new i.Object3D()),
        (this.rightHand.pointer = 0),
        (this.rightHand.grip = 0),
        (this.floorHeight = 0);
    }
  }
  class l0 {
    constructor(t) {
      (this.vrTransforms = new a0()),
        (this.referencePlayerHeightHmd = 1.7),
        (this.referencePlayerWidthWrist = 1.39),
        (this.playerHeightHmd = 1.7),
        (this.playerWidthWrist = 1.39);
    }
  }
  class Ot {
    constructor() {
      (this.transform = new i.Object3D()),
        (this.upperArm = new i.Object3D()),
        (this.lowerArm = new i.Object3D()),
        (this.hand = new i.Object3D()),
        this.transform.add(this.upperArm),
        this.upperArm.add(this.lowerArm),
        this.lowerArm.add(this.hand);
    }
  }
  const h0 = new i.Vector3(),
    c0 = new i.Vector3(),
    p = {
      getWorldPosition(e, t) {
        return t.setFromMatrixPosition(e.matrixWorld);
      },
      getWorldQuaternion(e, t) {
        return e.matrixWorld.decompose(h0, t, c0), t;
      },
      getWorldScale(e, t) {
        return t.setFromMatrixScale(e.matrixWorld);
      },
      updateMatrix(e) {
        e.matrix.compose(e.position, e.quaternion, e.scale);
      },
      updateMatrixWorld(e) {
        e.matrixWorld.multiplyMatrices(e.parent.matrixWorld, e.matrix);
      },
      updateMatrixMatrixWorld(e) {
        e.matrix.compose(e.position, e.quaternion, e.scale),
          e.matrixWorld.multiplyMatrices(e.parent.matrixWorld, e.matrix);
      },
    },
    Lt = new i.Vector3(1, 0, 0),
    ot = new i.Quaternion().setFromAxisAngle(new i.Vector3(0, 1, 0), Math.PI),
    yt = new i.Vector3(),
    z = new i.Vector3();
  new i.Vector3(), new i.Vector3();
  const Y = new i.Quaternion(),
    wt = new i.Quaternion(),
    Z = new i.Quaternion(),
    Mt = new i.Euler();
  new i.Euler();
  class d0 {
    constructor(t, o) {
      (this.rig = t),
        (this.shoulder = o),
        (this.poseManager = t.poseManager),
        (this.vrTransforms = this.poseManager.vrTransforms);
    }
    Update() {
      (this.shoulder.proneFactor = this.getProneFactor()),
        (this.shoulder.prone = this.shoulder.proneFactor > 0),
        this.shoulder.prone
          ? (this.shoulder.lastProneTimestamp = Date.now())
          : (this.shoulder.lastStandTimestamp = Date.now()),
        this.updateHips(),
        this.rotateShoulderBase(),
        this.updateNeck();
    }
    updateHips() {
      const t = Y.copy(this.vrTransforms.head.quaternion).multiply(ot),
        o = Mt.setFromQuaternion(t, "YXZ");
      (o.x = 0), (o.z = 0);
      const r = wt.setFromEuler(o);
      if (
        (r.multiply(
          Z.setFromAxisAngle(Lt, (this.shoulder.proneFactor * Math.PI) / 2)
        ),
        !this.rig.legsManager.leftLeg.standing &&
          !this.rig.legsManager.rightLeg.standing)
      ) {
        const c =
          1 -
          Math.min(
            this.rig.legsManager.leftLeg.standFactor,
            this.rig.legsManager.rightLeg.standFactor
          );
        r.multiply(Z.setFromAxisAngle(Lt, (c * Math.PI) / 4));
      } else {
        const c = Math.min(
          this.rig.legsManager.leftLeg.standFactor,
          this.rig.legsManager.rightLeg.standFactor
        );
        r.multiply(Z.setFromAxisAngle(Lt, ((1 - c) * Math.PI) / 4));
      }
      const d = yt
        .copy(this.vrTransforms.head.position)
        .sub(z.copy(this.shoulder.eyes.position).applyQuaternion(t))
        .sub(z.copy(this.shoulder.head.position).applyQuaternion(t))
        .sub(z.copy(this.shoulder.neck.position).applyQuaternion(r))
        .sub(z.copy(this.shoulder.transform.position).applyQuaternion(r))
        .sub(z.copy(this.shoulder.spine.position).applyQuaternion(r));
      this.shoulder.hips.position.copy(d),
        this.shoulder.hips.quaternion.copy(r),
        p.updateMatrix(this.shoulder.hips),
        this.shoulder.hips.matrixWorld.copy(this.shoulder.hips.matrix),
        p.updateMatrixWorld(this.shoulder.spine),
        p.updateMatrixWorld(this.shoulder.transform);
    }
    updateNeck() {
      const t = Y.copy(this.vrTransforms.head.quaternion).multiply(ot),
        o = Mt.setFromQuaternion(t, "YXZ");
      (o.x = 0), (o.z = 0);
      const r = wt.setFromEuler(o);
      this.shoulder.neck.quaternion
        .copy(r)
        .premultiply(
          p.getWorldQuaternion(this.shoulder.neck.parent, Z).invert()
        ),
        p.updateMatrixMatrixWorld(this.shoulder.neck),
        this.shoulder.head.quaternion
          .copy(t)
          .premultiply(
            p.getWorldQuaternion(this.shoulder.head.parent, Z).invert()
          ),
        p.updateMatrixMatrixWorld(this.shoulder.head),
        p.updateMatrixWorld(this.shoulder.eyes);
    }
    rotateShoulderBase() {
      const t = this.getCombinedDirectionAngleUp();
      this.shoulder.transform.quaternion
        .setFromEuler(Mt.set(0, t, 0, "YXZ"))
        .premultiply(Y.copy(this.shoulder.hips.quaternion).multiply(ot)),
        this.shoulder.transform.quaternion.premultiply(
          p.getWorldQuaternion(this.shoulder.transform.parent, Y).invert()
        ),
        p.updateMatrixMatrixWorld(this.shoulder.transform),
        p.updateMatrixWorld(this.shoulder.leftShoulderAnchor),
        p.updateMatrixWorld(this.shoulder.rightShoulderAnchor);
    }
    getCombinedDirectionAngleUp() {
      const t = Y.copy(this.shoulder.hips.quaternion).multiply(ot),
        o = wt.copy(t).invert(),
        r = yt
          .copy(this.vrTransforms.leftHand.position)
          .sub(this.vrTransforms.head.position)
          .applyQuaternion(o),
        a = z
          .copy(this.vrTransforms.rightHand.position)
          .sub(this.vrTransforms.head.position)
          .applyQuaternion(o);
      (r.y = 0), (a.y = 0);
      const s = r.z > 0,
        n = a.z > 0;
      s && (r.z *= n ? -2 : -1), n && (a.z *= s ? -2 : -1);
      const l = yt.addVectors(r.normalize(), a.normalize());
      return Math.atan2(l.x, l.z);
    }
    getProneFactor() {
      return (
        1 -
        Math.min(
          Math.max(
            (this.vrTransforms.head.position.y - this.rig.height * 0.3) /
              (this.rig.height * 0.3),
            0
          ),
          1
        )
      );
    }
  }
  const Ut = new i.Vector3(),
    p0 = new i.Vector3(0, 0, 1),
    zt = new i.Quaternion().setFromAxisAngle(
      new i.Vector3(0, 1, 0),
      Math.PI / 2
    ),
    jt = new i.Quaternion().setFromAxisAngle(
      new i.Vector3(0, 1, 0),
      -Math.PI / 2
    ),
    u0 = new i.Quaternion().setFromAxisAngle(
      new i.Vector3(0, 0, 1),
      Math.PI / 2
    ),
    g0 = new i.Quaternion().setFromAxisAngle(
      new i.Vector3(0, 0, 1),
      -Math.PI / 2
    ),
    f0 = new i.Quaternion().setFromAxisAngle(new i.Vector3(0, 1, 0), Math.PI),
    _t = new i.Vector3(),
    xt = new i.Vector3(),
    m0 = new i.Vector3(),
    Gt = new i.Vector3(),
    $t = new i.Vector3(),
    Yt = new i.Vector3(),
    L0 = new i.Quaternion(),
    y0 = new i.Quaternion(),
    nt = new i.Quaternion(),
    w0 = new i.Euler(),
    Zt = new i.Matrix4();
  class Jt {
    constructor(t, o, r, a, s) {
      (this.arm = t),
        (this.shoulder = o),
        (this.shoulderPoser = r),
        (this.target = a),
        (this.left = s),
        (this.upperArmLength = 0),
        (this.lowerArmLength = 0),
        (this.armLength = 0);
    }
    Start() {
      (this.upperArmLength = p
        .getWorldPosition(this.arm.lowerArm, _t)
        .distanceTo(p.getWorldPosition(this.arm.upperArm, xt))),
        (this.lowerArmLength = p
          .getWorldPosition(this.arm.hand, _t)
          .distanceTo(p.getWorldPosition(this.arm.lowerArm, xt))),
        (this.armLength = this.upperArmLength + this.lowerArmLength);
    }
    Update() {
      p.updateMatrixWorld(this.arm.transform),
        p.updateMatrixWorld(this.arm.upperArm);
      const t = p.getWorldPosition(this.arm.upperArm, _t),
        o = this.target.quaternion,
        r = xt.copy(this.target.position),
        a = p.getWorldQuaternion(this.shoulder.transform, L0),
        s = y0.copy(a).invert(),
        n = this.upperArmLength,
        l = t.distanceTo(r) / 2,
        d = n > l ? Math.sqrt(n * n - l * l) : 0,
        c = m0
          .copy(r)
          .sub(t)
          .normalize()
          .cross(Gt.set(-1, 0, 0).applyQuaternion(a)),
        u = w0.setFromQuaternion(
          nt.multiplyQuaternions(o, s).premultiply(f0),
          "XYZ"
        );
      if (this.left) {
        const M = Math.min(
          Math.max((u.y + Math.PI * 0.1) / (Math.PI / 2), 0),
          1
        );
        (u.z = Math.min(Math.max(u.z, -Math.PI / 2), 0)),
          (u.z = u.z * (1 - M) + (-Math.PI / 2) * M);
      } else {
        const M = Math.min(
          Math.max((-u.y - Math.PI * 0.1) / (Math.PI / 2), 0),
          1
        );
        (u.z = Math.min(Math.max(u.z, 0), Math.PI / 2)),
          (u.z = u.z * (1 - M) + (Math.PI / 2) * M);
      }
      c.applyQuaternion(s).applyAxisAngle(p0, u.z).applyQuaternion(a);
      const L = Gt.copy(t)
          .add(r)
          .divideScalar(2)
          .add($t.copy(c).multiplyScalar(d)),
        m = $t.set(this.left ? -1 : 1, 0, 0).applyQuaternion(a);
      this.arm.upperArm.quaternion
        .setFromRotationMatrix(Zt.lookAt(Ut, Yt.copy(L).sub(t), m))
        .multiply(this.left ? jt : zt)
        .premultiply(
          p.getWorldQuaternion(this.arm.upperArm.parent, nt).invert()
        ),
        p.updateMatrixMatrixWorld(this.arm.upperArm),
        this.arm.lowerArm.quaternion
          .setFromRotationMatrix(Zt.lookAt(Ut, Yt.copy(r).sub(L), m))
          .multiply(this.left ? jt : zt)
          .premultiply(
            p.getWorldQuaternion(this.arm.lowerArm.parent, nt).invert()
          ),
        p.updateMatrixMatrixWorld(this.arm.lowerArm),
        this.arm.hand.quaternion
          .copy(this.target.quaternion)
          .multiply(this.left ? g0 : u0)
          .premultiply(p.getWorldQuaternion(this.arm.hand.parent, nt).invert()),
        p.updateMatrixMatrixWorld(this.arm.hand);
    }
  }
  class M0 {
    constructor(t) {
      (this.transform = new i.Object3D()),
        (this.hips = new i.Object3D()),
        (this.spine = new i.Object3D()),
        (this.neck = new i.Object3D()),
        (this.head = new i.Object3D()),
        (this.eyes = new i.Object3D()),
        this.hips.add(this.spine),
        this.spine.add(this.transform),
        this.transform.add(this.neck),
        this.neck.add(this.head),
        this.head.add(this.eyes),
        (this.leftShoulderAnchor = new i.Object3D()),
        this.transform.add(this.leftShoulderAnchor),
        (this.rightShoulderAnchor = new i.Object3D()),
        this.transform.add(this.rightShoulderAnchor),
        (this.leftArm = new Ot()),
        (this.rightArm = new Ot()),
        this.leftShoulderAnchor.add(this.leftArm.transform),
        this.rightShoulderAnchor.add(this.rightArm.transform),
        (this.prone = !1),
        (this.proneFactor = 0);
      const o = Date.now();
      (this.lastStandTimestamp = o),
        (this.lastProneTimestamp = o),
        (this.shoulderPoser = new d0(t, this)),
        (this.leftArmIk = new Jt(
          this.leftArm,
          this,
          this.shoulderPoser,
          this.shoulderPoser.vrTransforms.leftHand,
          !0
        )),
        (this.rightArmIk = new Jt(
          this.rightArm,
          this,
          this.shoulderPoser,
          this.shoulderPoser.vrTransforms.rightHand,
          !1
        ));
    }
    Start() {
      this.leftArmIk.Start(), this.rightArmIk.Start();
    }
    Update() {
      this.shoulderPoser.Update(),
        this.leftArmIk.Update(),
        this.rightArmIk.Update();
    }
  }
  const _0 = 0.2,
    Xt = 0.2,
    Kt = 0,
    te = 0.25,
    x0 = 0.8,
    v0 = 0.015,
    ee = 0.015,
    T0 = 25,
    ie = 0.9,
    st = new i.Vector3(),
    J = new i.Vector3(1, 1, 1);
  new i.Quaternion();
  const vt = new i.Quaternion().setFromAxisAngle(
      new i.Vector3(1, 0, 0),
      -Math.PI / 2
    ),
    re = new i.Quaternion().setFromAxisAngle(
      new i.Vector3(1, 0, 0),
      Math.PI / 2
    ),
    oe = new i.Quaternion().setFromAxisAngle(
      new i.Vector3(1, 0, 0),
      -Math.PI / 4
    ),
    X = new i.Vector3(),
    at = new i.Vector3(),
    P0 = new i.Vector3(),
    ne = new i.Vector3(),
    lt = new i.Vector3(),
    F = new i.Vector3(),
    ht = new i.Vector3(),
    se = new i.Quaternion(),
    ct = new i.Quaternion(),
    ae = new i.Quaternion(),
    Tt = new i.Euler(),
    Pt = new i.Matrix4(),
    b0 = new i.Matrix4(),
    dt = new i.Matrix4();
  class le {
    constructor(t, o) {
      (this.transform = new i.Object3D()),
        (this.upperLeg = new i.Object3D()),
        (this.lowerLeg = new i.Object3D()),
        (this.foot = new i.Object3D()),
        (this.foot.stickTransform = new i.Object3D()),
        (this.foot.startTransform = new i.Object3D()),
        (this.foot.endTransform = new i.Object3D()),
        (this.foot.startHmdFloorTransform = new i.Object3D()),
        this.transform.add(this.upperLeg),
        this.upperLeg.add(this.lowerLeg),
        this.lowerLeg.add(this.foot),
        (this.upperLegLength = 0),
        (this.lowerLegLength = 0),
        (this.legLength = 0),
        (this.eyesToUpperLegOffset = new i.Vector3()),
        (this.legsManager = t),
        (this.left = o),
        (this.standing = !0),
        (this.standFactor = 1);
      const r = Date.now();
      (this.lastStandTimestamp = r),
        (this.lastJumpTimestamp = r),
        (this.stepping = !1),
        (this.lastStepTimestamp = r),
        (this.balance = 1);
    }
    Start() {
      (this.upperLegLength = this.lowerLeg.position.length()),
        (this.lowerLegLength = this.foot.position.length()),
        (this.legLength = this.upperLegLength + this.lowerLegLength),
        p
          .getWorldPosition(this.upperLeg, this.eyesToUpperLegOffset)
          .sub(
            p.getWorldPosition(this.legsManager.rig.shoulderTransforms.eyes, X)
          );
    }
    Update() {
      const t = X.copy(this.foot.stickTransform.position),
        o = p.getWorldPosition(this.upperLeg, at),
        r = this.foot.stickTransform.quaternion,
        a = this.upperLegLength,
        s =
          ((this.legsManager.rig.shoulderTransforms.prone || !this.standing
            ? o.distanceTo(this.foot.stickTransform.position)
            : Math.abs(o.y - this.foot.stickTransform.position.y)) *
            this.upperLegLength) /
          this.legLength,
        n = a > s ? Math.sqrt(a * a - s * s) : 0,
        l = ne
          .copy(o)
          .add(t)
          .divideScalar(2)
          .add(
            lt
              .copy(t)
              .sub(o)
              .cross(F.set(1, 0, 0).applyQuaternion(r))
              .normalize()
              .multiplyScalar(n)
          );
      this.upperLeg.quaternion
        .setFromRotationMatrix(
          Pt.lookAt(st, lt.copy(o).sub(l), F.set(0, 1, 0).applyQuaternion(r))
        )
        .multiply(vt)
        .premultiply(p.getWorldQuaternion(this.transform, ct).invert()),
        p.updateMatrixMatrixWorld(this.upperLeg),
        this.lowerLeg.quaternion
          .setFromRotationMatrix(
            Pt.lookAt(st, lt.copy(l).sub(t), F.set(0, 0, 1).applyQuaternion(r))
          )
          .multiply(vt)
          .premultiply(p.getWorldQuaternion(this.upperLeg, ct).invert()),
        p.updateMatrixMatrixWorld(this.lowerLeg),
        this.foot.quaternion
          .copy(r)
          .multiply(vt)
          .premultiply(p.getWorldQuaternion(this.lowerLeg, ct).invert()),
        p.updateMatrixMatrixWorld(this.foot);
    }
    getStandFactor() {
      return (
        1 -
        Math.pow(
          Math.min(
            Math.max(
              (p
                .getWorldPosition(
                  this.legsManager.rig.shoulderTransforms.eyes,
                  X
                )
                .add(this.eyesToUpperLegOffset).y -
                this.legsManager.poseManager.vrTransforms.floorHeight -
                this.legLength) /
                (this.legsManager.rig.height * 0.2),
              0
            ),
            1
          ),
          0.7
        )
      );
    }
  }
  class A0 {
    constructor(t) {
      (this.hips = t.shoulderTransforms.hips),
        (this.leftLeg = new le(this, !0)),
        this.hips.add(this.leftLeg.transform),
        (this.rightLeg = new le(this, !1)),
        this.hips.add(this.rightLeg.transform),
        (this.rig = t),
        (this.poseManager = t.poseManager),
        (this.legSeparation = 0),
        (this.lastHmdPosition = new i.Vector3()),
        (this.hmdVelocity = new i.Vector3());
    }
    Start() {
      (this.legSeparation = p
        .getWorldPosition(this.leftLeg.upperLeg, X)
        .distanceTo(p.getWorldPosition(this.rightLeg.upperLeg, at))),
        this.lastHmdPosition.copy(this.poseManager.vrTransforms.head.position),
        this.leftLeg.Start(),
        this.rightLeg.Start();
    }
    Update() {
      p.updateMatrixWorld(this.leftLeg.transform),
        p.updateMatrixWorld(this.leftLeg.upperLeg),
        p.updateMatrixWorld(this.leftLeg.lowerLeg),
        p.updateMatrixWorld(this.leftLeg.foot),
        p.updateMatrixWorld(this.rightLeg.transform),
        p.updateMatrixWorld(this.rightLeg.upperLeg),
        p.updateMatrixWorld(this.rightLeg.lowerLeg),
        p.updateMatrixWorld(this.rightLeg.foot);
      const t = Date.now();
      this.hmdVelocity
        .copy(this.poseManager.vrTransforms.head.position)
        .sub(this.lastHmdPosition),
        this.lastHmdPosition.copy(this.poseManager.vrTransforms.head.position),
        (this.leftLeg.standFactor = this.leftLeg.getStandFactor()),
        (this.leftLeg.standing = this.leftLeg.standFactor >= 1),
        this.leftLeg.standing
          ? (this.leftLeg.lastStandTimestamp = t)
          : (this.leftLeg.lastJumpTimestamp = t),
        this.leftLeg.stepping &&
          !this.leftLeg.standing &&
          (this.leftLeg.stepping = !1),
        (this.rightLeg.standFactor = this.rightLeg.getStandFactor()),
        (this.rightLeg.standing = this.rightLeg.standFactor >= 1),
        this.rightLeg.standing
          ? (this.rightLeg.lastStandTimestamp = t)
          : (this.rightLeg.lastJumpTimestamp = t),
        this.rightLeg.stepping &&
          !this.rightLeg.standing &&
          (this.rightLeg.stepping = !1);
      const o = X.copy(this.hips.position);
      o.y = this.poseManager.vrTransforms.floorHeight;
      const r = Tt.setFromQuaternion(this.hips.quaternion, "YXZ");
      (r.x = 0), (r.z = 0);
      const a = Pt.compose(o, se.setFromEuler(r), J),
        s = b0.copy(a).invert(),
        n = at,
        l = P0,
        d = ne,
        c = se;
      dt.compose(
        this.leftLeg.foot.stickTransform.position,
        this.leftLeg.foot.stickTransform.quaternion,
        J
      )
        .premultiply(s)
        .decompose(d, c, l);
      const u = lt,
        L = ct;
      dt.compose(
        this.rightLeg.foot.stickTransform.position,
        this.rightLeg.foot.stickTransform.quaternion,
        J
      )
        .premultiply(s)
        .decompose(u, L, l);
      const m = 0.1;
      if (this.leftLeg.standing && !this.rig.shoulderTransforms.prone) {
        const g = Tt.setFromQuaternion(c, "YXZ");
        (g.x = 0),
          (g.z = 0),
          g.y < -Math.PI * m && (g.y = -Math.PI * m),
          g.y > Math.PI * m && (g.y = Math.PI * m),
          dt
            .compose(st, ae.setFromEuler(g), J)
            .premultiply(a)
            .decompose(n, this.leftLeg.foot.stickTransform.quaternion, l);
      } else this.leftLeg.standing ? p.getWorldQuaternion(this.leftLeg.foot, this.leftLeg.foot.stickTransform.quaternion).multiply(re) : this.leftLeg.foot.stickTransform.quaternion.copy(this.hips.quaternion).multiply(oe);
      if (this.rightLeg.standing && !this.rig.shoulderTransforms.prone) {
        const g = Tt.setFromQuaternion(L, "YXZ");
        (g.x = 0),
          (g.z = 0),
          g.y < -Math.PI * m && (g.y = -Math.PI * m),
          g.y > Math.PI * m && (g.y = Math.PI * m),
          dt
            .compose(st, ae.setFromEuler(g), J)
            .premultiply(a)
            .decompose(n, this.rightLeg.foot.stickTransform.quaternion, l);
      } else this.rightLeg.standing ? p.getWorldQuaternion(this.rightLeg.foot, this.rightLeg.foot.stickTransform.quaternion).multiply(re) : this.rightLeg.foot.stickTransform.quaternion.copy(this.hips.quaternion).multiply(oe);
      const M = (g) => {
        if (g.stepping) {
          const x = t - g.lastStepTimestamp;
          g.lastStepTimestamp = t;
          const P =
            _0 *
            Math.max(
              at.set(this.hmdVelocity.x, 0, this.hmdVelocity.z).length() /
                this.rig.height,
              v0
            );
          return Math.min(Math.max(g.stepFactor + P * x, 0), 1);
        } else return 0;
      };
      (this.leftLeg.stepFactor = M(this.leftLeg)),
        (this.rightLeg.stepFactor = M(this.rightLeg));
      const S =
          this.leftLeg.standing &&
          !this.leftLeg.stepping &&
          (!this.rightLeg.stepping || this.rightLeg.stepFactor >= ie),
        k =
          this.rightLeg.standing &&
          !this.rightLeg.stepping &&
          (!this.leftLeg.stepping || this.leftLeg.stepFactor >= ie),
        D = 0;
      if (S || k) {
        let g = 0,
          x = 0;
        if (S) {
          const _ = Math.sqrt(d.x * d.x + d.z * d.z),
            R = Math.atan2(d.x, d.z);
          (_ < this.rig.height * Kt || _ > this.rig.height * te) && (g = _),
            (R > -Math.PI * D || R < -Math.PI + Math.PI * D) && (x = R);
        }
        let P = 0,
          B = 0;
        if (k) {
          const _ = Math.sqrt(u.x * u.x + u.z * u.z),
            R = Math.atan2(u.x, u.z);
          (_ < this.rig.height * Kt || _ > this.rig.height * te) && (P = _),
            (R < Math.PI * D || R > Math.PI - Math.PI * D) && (B = R);
        }
        const tt = (_) => {
          const R = this.legSeparation * x0;
          _.foot.startTransform.position.copy(_.foot.stickTransform.position),
            _.foot.endTransform.position
              .copy(o)
              .add(
                F.set((_.left ? -1 : 1) * R, 0, 0).applyQuaternion(
                  _.foot.stickTransform.quaternion
                )
              );
          const N = F.set(this.hmdVelocity.x, 0, this.hmdVelocity.z),
            et = N.length();
          et > ee * this.rig.height &&
            N.multiplyScalar((ee * this.rig.height) / et),
            N.multiplyScalar(T0),
            _.foot.endTransform.position.add(N),
            _.foot.startHmdFloorTransform.position.set(
              this.poseManager.vrTransforms.head.position.x,
              0,
              this.poseManager.vrTransforms.head.position.z
            ),
            (_.lastStepTimestamp = t),
            (_.stepping = !0);
        };
        (g !== 0 || x !== 0) &&
        (P === 0 ||
          Math.abs(g * this.leftLeg.balance) >=
            Math.abs(P * this.rightLeg.balance)) &&
        (B === 0 ||
          Math.abs(x * this.leftLeg.balance) >=
            Math.abs(B * this.rightLeg.balance))
          ? (tt(this.leftLeg),
            (this.leftLeg.balance = 0),
            (this.rightLeg.balance = 1))
          : (P !== 0 || B !== 0) &&
            (tt(this.rightLeg),
            (this.rightLeg.balance = 0),
            (this.leftLeg.balance = 1));
      }
      if (this.rig.shoulderTransforms.prone) {
        const g = p
          .getWorldPosition(this.leftLeg.upperLeg, F)
          .add(
            ht
              .set(
                0,
                -this.leftLeg.legLength * 0.95 +
                  this.poseManager.vrTransforms.floorHeight,
                0
              )
              .applyQuaternion(this.hips.quaternion)
          );
        (g.y = 0),
          this.leftLeg.foot.stickTransform.position.lerp(g, 0.1),
          (this.leftLeg.stepping = !1);
      } else if (this.leftLeg.stepping)
        this.leftLeg.foot.stickTransform.position
          .copy(this.leftLeg.foot.startTransform.position)
          .lerp(
            this.leftLeg.foot.endTransform.position,
            this.leftLeg.stepFactor
          )
          .add(
            F.set(
              0,
              Math.sin(this.leftLeg.stepFactor * Math.PI) *
                Xt *
                this.rig.height,
              0
            )
          ),
          this.leftLeg.stepFactor >= 1 && (this.leftLeg.stepping = !1);
      else if (this.leftLeg.standing) {
        const g = F.copy(this.leftLeg.foot.stickTransform.position);
        (g.y = this.poseManager.vrTransforms.floorHeight),
          this.leftLeg.foot.stickTransform.position.lerp(g, 0.2);
      } else {
        const g = p.getWorldPosition(this.leftLeg.upperLeg, F).add(
          ht
            .set(0, 0, 1)
            .normalize()
            .applyQuaternion(this.hips.quaternion)
            .multiplyScalar(this.leftLeg.legLength * 0.5)
        );
        this.leftLeg.foot.stickTransform.position.lerp(g, 0.1);
      }
      if (this.rig.shoulderTransforms.prone) {
        const g = p
          .getWorldPosition(this.rightLeg.upperLeg, F)
          .add(
            ht
              .set(
                0,
                -this.rightLeg.legLength * 0.95 +
                  this.poseManager.vrTransforms.floorHeight,
                0
              )
              .applyQuaternion(this.hips.quaternion)
          );
        (g.y = 0),
          this.rightLeg.foot.stickTransform.position.lerp(g, 0.1),
          (this.rightLeg.stepping = !1);
      } else if (this.rightLeg.stepping)
        this.rightLeg.foot.stickTransform.position
          .copy(this.rightLeg.foot.startTransform.position)
          .lerp(
            this.rightLeg.foot.endTransform.position,
            this.rightLeg.stepFactor
          )
          .add(
            F.set(
              0,
              Math.sin(this.rightLeg.stepFactor * Math.PI) *
                Xt *
                this.rig.height,
              0
            )
          ),
          this.rightLeg.stepFactor >= 1 && (this.rightLeg.stepping = !1);
      else if (this.rightLeg.standing) {
        const g = F.copy(this.rightLeg.foot.stickTransform.position);
        (g.y = this.poseManager.vrTransforms.floorHeight),
          this.rightLeg.foot.stickTransform.position.lerp(g, 0.2);
      } else {
        const g = p.getWorldPosition(this.rightLeg.upperLeg, F).add(
          ht
            .set(0, 0, 1)
            .normalize()
            .applyQuaternion(this.hips.quaternion)
            .multiplyScalar(this.rightLeg.legLength * 0.6)
        );
        this.rightLeg.foot.stickTransform.position.lerp(g, 0.1);
      }
      this.leftLeg.Update(), this.rightLeg.Update();
    }
  }
  var R0 = `const numTicks = 1;\r
\r
let tick = 0;\r
let sampleSum = 0;\r
let numSamples = 0;\r
let muted = true;\r
\r
class VolumeProcessor extends AudioWorkletProcessor {\r
  constructor() {\r
    super();\r
\r
    this.port.addEventListener('message', e => {\r
      const data = JSON.parse(e.data);\r
      const {method} = data;\r
      if (method === 'muted') {\r
        muted = data.muted;\r
      }\r
    });\r
    this.port.start();\r
  }\r
  process(inputs, outputs) {\r
    const channels = inputs[0];\r
    // const output = outputs[0];\r
\r
    // for (let i = 0; i < channels.length; i++) {\r
      const i = 0;\r
      const samples = channels[i];\r
      for (let j = 0; j < samples.length; j++) {\r
        sampleSum += Math.abs(samples[j]);\r
      }\r
      numSamples += samples.length;\r
    // }\r
\r
    if (++tick >= numTicks) {\r
      this.port.postMessage(sampleSum / numSamples);\r
\r
      tick = 0;\r
      sampleSum = 0;\r
      numSamples = 0;\r
    }\r
\r
    if (!muted) {\r
      for (let i = 0; i < outputs.length; i++) {\r
        const input = inputs[i];\r
        const output = outputs[i];\r
\r
        for (let channel = 0; channel < output.length; channel++) {\r
          output[channel].set(input[channel]);\r
        }\r
      }\r
    }\r
\r
    return true;\r
  }\r
}\r
registerProcessor('volume-processor', VolumeProcessor);`;
  class S0 extends EventTarget {
    constructor(t, o = {}) {
      super();
      const r = document.createElement("audio");
      (r.srcObject = t),
        (r.muted = !0),
        (this.audioContext = new AudioContext());
      const a = this.audioContext.createMediaStreamSource(t);
      this.audioContext.audioWorklet
        .addModule(
          o.microphoneWorkletUrl ||
            `data:application/javascript;charset=utf8,${encodeURIComponent(R0)}`
        )
        .then(() => {
          const s = new AudioWorkletNode(this.audioContext, "volume-processor");
          o.muted === !1 &&
            s.port.postMessage(JSON.stringify({ method: "muted", muted: !1 })),
            (s.port.onmessage = (n) => {
              this.dispatchEvent(new MessageEvent("volume", { data: n.data }));
            }),
            a.connect(s).connect(this.audioContext.destination);
        });
    }
    close() {
      this.audioContext.close();
    }
  }
  var k0 =
    '["Armature",[0,0,0,0,0,0,1,1,1,1],[["Hips",[-4.764560328305439e-22,0.9901136159896851,0.040974393486976624,1,-1.9958527221869936e-15,1.1920922560193503e-7,-9.735359896012596e-8,1,0.9999999403953552,0.9999999403953552],[["Spine",[8.881776256067372e-16,-1.2409380190092634e-7,-7.450584149637507e-9,0.9997583031654358,-3.4153149197635457e-9,1.1921520126634277e-7,0.021985134109854698,1,1.0000001192092896,1.0000735521316528],[["Chest",[-2.8913337305627534e-16,0.08727944642305374,-1.5612890535976476e-8,-0.05003303661942482,1.1906852392939982e-7,-5.966564575743405e-9,0.9987475872039795,1,0.9999998807907104,0.9999999403953552],[["Neck",[-7.525669201854067e-15,0.1973666548728943,1.130800697524137e-8,0.07688746601343155,-1.1883879835750122e-7,9.171047921086029e-9,0.9970398545265198,1,0.9999996423721313,0.9999999403953552],[["Head",[-1.268057280792193e-19,0.06861116737127304,2.575603064158827e-10,-0.004925626330077648,-2.6168825786876404e-11,-3.042392997688187e-13,0.9999879002571106,1,1.0000001192092896,1.000000238418579],[["Eye_R",[-0.02648639865219593,0.05120223015546799,0.019837098196148872,-0.160249263048172,0.6969521045684814,0.6969586610794067,0.05316544696688652,1,1.0000001192092896,0.9999999403953552],[]],["Eye_L",[0.02648639865219593,0.05120223015546799,0.019837098196148872,-0.160249263048172,-0.6969521045684814,-0.6969586610794067,0.05316544696688652,1,1.0000001192092896,0.9999999403953552],[]],["StandingEars1_R",[-0.04328959435224533,0.13830988109111786,-0.017249949276447296,0.1357475221157074,0.04495804384350777,0.044957272708415985,0.9887012839317322,1.0000001192092896,0.9999998807907104,0.9999999403953552],[["StandingEars2_R",[3.2651956693996453e-9,0.029600219801068306,-1.0180473708487625e-7,-0.0003664675750769675,-0.01292889378964901,-0.009843501262366772,0.9998679161071777,0.9999998211860657,1,0.9999998211860657],[["StandingEars3_R",[3.868987352717568e-9,0.046097323298454285,-3.8355018716629274e-8,0.09286198019981384,-0.05294885113835335,-0.03466515615582466,0.9936656355857849,0.9999998807907104,0.9999998807907104,0.9999998211860657],[]]]]]],["StandingEars1_L",[0.04328959435224533,0.13830988109111786,-0.017249949276447296,0.1357475221157074,-0.04495804384350777,-0.044957272708415985,0.9887012839317322,1.0000001192092896,0.9999998807907104,0.9999999403953552],[["StandingEars2_L",[-3.2651956693996453e-9,0.029600219801068306,-1.0180473708487625e-7,-0.0003664675750769675,0.01292889378964901,0.009843501262366772,0.9998679161071777,0.9999998211860657,1,0.9999998211860657],[["StandingEars3_L",[-3.868987352717568e-9,0.046097323298454285,-3.8355018716629274e-8,0.09286198019981384,0.05294885113835335,0.03466515615582466,0.9936656355857849,0.9999998807907104,0.9999998807907104,0.9999998211860657],[]]]]]],["Hair1_R",[-0.05674159526824951,0.14185218513011932,0.004379991441965103,-0.9789010286331177,0.14186254143714905,0.14183951914310455,0.038852352648973465,1.0000029802322388,1.0000003576278687,1],[["Hair2_R",[-3.67872416973114e-8,0.07205186039209366,-3.725290298461914e-9,0.06192794442176819,0.027937548235058784,-0.04899432510137558,0.9964858293533325,0.9999998807907104,0.9999998807907104,0.9999999403953552],[["Hair3_R",[-3.529947889546747e-8,0.10827109217643738,6.058744617121192e-9,0.10654902458190918,-0.10275916755199432,0.10163572430610657,0.9837469458580017,0.9999998211860657,0.9999998211860657,0.9999999403953552],[["Hair5_R",[-4.922059559930858e-8,0.2657814919948578,-1.1666276833466327e-7,0.0902017205953598,0.09775179624557495,-0.20269449055194855,0.9701666831970215,1.0000001192092896,1.0000001192092896,1],[["Hair6_R",[-1.862645149230957e-9,0.09898854792118073,-4.6566128730773926e-8,-0.23959340155124664,0.12270104140043259,-0.20550969243049622,0.9409065842628479,1.0000003576278687,1.0000001192092896,1.000000238418579],[["Hair7_R",[3.166496753692627e-8,0.09518476575613022,1.1175870895385742e-8,-0.10351262986660004,-0.14494562149047852,0.13637173175811768,0.9745146036148071,0.9999998807907104,0.9999997615814209,0.9999997615814209],[["Hair8_R",[3.725290298461914e-9,0.09951279312372208,1.7695128917694092e-8,0.13740508258342743,-0.01385509967803955,0.008886626921594143,0.9903782606124878,0.9999999403953552,0.9999998807907104,1],[]]]]]]]]]]]]]],["Hair1_L",[0.06208624690771103,0.14414384961128235,-0.01495930552482605,-0.978900671005249,-0.14185091853141785,-0.14185169339179993,0.03885859623551369,0.9999966025352478,0.9999997019767761,0.9999999403953552],[["Hair2_L",[-1.6298145055770874e-9,0.07205165177583694,2.7939677238464355e-9,0.06192799285054207,-0.0279371440410614,0.04899446293711662,0.9964858293533325,1,0.9999998807907104,0.9999999403953552],[["Hair3_L",[-1.257285475730896e-8,0.10827106237411499,-1.862645149230957e-8,0.10654883086681366,0.10275834798812866,-0.10163601487874985,0.9837470054626465,1,1.0000001192092896,1],[["Hair5_L",[-1.1175870895385742e-8,0.26578161120414734,1.4901161193847656e-8,0.09020152688026428,-0.0977509468793869,0.20269547402858734,0.9701665043830872,0.9999998807907104,0.9999997615814209,0.9999999403953552],[["Hair6_L",[1.862645149230957e-9,0.09898875653743744,-5.587935447692871e-9,-0.2395932972431183,-0.12270071357488632,0.20550943911075592,0.940906822681427,0.9999998807907104,0.9999996423721313,0.9999997615814209],[["Hair7_L",[3.725290298461914e-9,0.0951850414276123,7.450580596923828e-9,-0.10351207852363586,0.14494460821151733,-0.1363714635372162,0.9745148420333862,1.0000001192092896,0.9999998211860657,0.9999998807907104],[["Hair8_L",[-2.7939677238464355e-9,0.09951331466436386,-1.3504177331924438e-8,0.13740453124046326,0.013855460099875927,-0.008887086994946003,0.9903782606124878,0.9999998807907104,1.0000001192092896,0.9999997615814209],[]]]]]]]]]]]]]],["Hair21_R",[-0.024621548131108284,0.14939874410629272,-0.0411190427839756,-0.971066415309906,0.11676698923110962,0.11678998917341232,0.1724979430437088,0.9999992251396179,0.9999998807907104,0.9999991655349731],[["Hair22_R",[-1.7080894920695755e-8,0.07549650222063065,-2.1185213583407858e-8,0.042726077139377594,-0.02246226742863655,0.01964012160897255,0.9986411929130554,0.9999997615814209,0.9999998211860657,0.9999998807907104],[["Hair23_R",[1.30385160446167e-8,0.11306732892990112,1.862645149230957e-9,-0.006093519274145365,0.037633929401636124,-0.05706079304218292,0.9976426362991333,0.9999999403953552,0.9999998807907104,0.9999998211860657],[["Hair24_R",[7.450580596923828e-9,0.21121430397033691,1.1175870895385742e-8,0.04010539874434471,-0.0758029893040657,0.10839971154928207,0.9904014468193054,1.0000001192092896,0.9999998211860657,1],[["Hair25_R",[7.450580596923828e-9,0.1725718230009079,3.725290298461914e-8,-0.17603935301303864,0.029646748676896095,0.04157049581408501,0.9830580353736877,1,1.0000001192092896,1.0000001192092896],[["Hair26_R",[2.9802322387695312e-8,0.1238829717040062,-2.2351741790771484e-8,0.03691902384161949,0.28326982259750366,-0.3386003077030182,0.8965182900428772,0.9999998807907104,1,0.9999998211860657],[["Hair27_R",[0,0.11360013484954834,3.725290298461914e-9,0.18678219616413116,0.03417342156171799,0.01253802701830864,0.9817267656326294,1.0000001192092896,1,1],[["Hair28_R",[4.470348358154297e-8,0.12201113998889923,-2.0489096641540527e-8,-0.110519178211689,-0.1095462366938591,0.16148608922958374,0.9745293259620667,1,1.000000238418579,1],[]]]]]]]]]]]]]]]],["Hair21_L",[0.024621548131108284,0.14939874410629272,-0.0411190427839756,-0.971066415309906,-0.11676698923110962,-0.11678998917341232,0.1724979430437088,0.9999992251396179,0.9999998807907104,0.9999991655349731],[["Hair22_L",[1.7080894920695755e-8,0.07549650222063065,-2.1185213583407858e-8,0.042726077139377594,0.02246226742863655,-0.01964012160897255,0.9986411929130554,0.9999997615814209,0.9999998211860657,0.9999998807907104],[["Hair23_L",[-1.30385160446167e-8,0.11306732892990112,1.862645149230957e-9,-0.006093519274145365,-0.037633929401636124,0.05706079304218292,0.9976426362991333,0.9999999403953552,0.9999998807907104,0.9999998211860657],[["Hair24_L",[-7.450580596923828e-9,0.21121430397033691,1.1175870895385742e-8,0.04010539874434471,0.0758029893040657,-0.10839971154928207,0.9904014468193054,1.0000001192092896,0.9999998211860657,1],[["Hair25_L",[-7.450580596923828e-9,0.1725718230009079,3.725290298461914e-8,-0.17603935301303864,-0.029646748676896095,-0.04157049581408501,0.9830580353736877,1,1.0000001192092896,1.0000001192092896],[["Hair26_L",[-2.9802322387695312e-8,0.1238829717040062,-2.2351741790771484e-8,0.03691902384161949,-0.28326982259750366,0.3386003077030182,0.8965182900428772,0.9999998807907104,1,0.9999998211860657],[["Hair27_L",[0,0.11360013484954834,3.725290298461914e-9,0.18678219616413116,-0.03417342156171799,-0.01253802701830864,0.9817267656326294,1.0000001192092896,1,1],[["Hair28_L",[-4.470348358154297e-8,0.12201113998889923,-2.0489096641540527e-8,-0.110519178211689,0.1095462366938591,-0.16148608922958374,0.9745293259620667,1,1.000000238418579,1],[]]]]]]]]]]]]]]]],["Hair31_R",[-0.0006344257271848619,0.14939913153648376,-0.07985317707061768,-0.9843132495880127,0.06418239325284958,0.06423899531364441,0.15126599371433258,1.000000238418579,1.0000001192092896,1.0000004768371582],[["Hair32_R",[-1.210719347000122e-8,0.0727984756231308,-1.979060471057892e-8,0.056747280061244965,0.01272169966250658,-0.02604222483932972,0.9979678988456726,1,0.9999999403953552,0.9999998211860657],[["Hair33_R",[1.3969838619232178e-8,0.10768461972475052,-1.2898817658424377e-7,0.026520270854234695,0.010424706153571606,-0.019086375832557678,0.9994117617607117,1,1,1],[["Hair34_R",[-3.725290298461914e-9,0.21081344783306122,1.3154931366443634e-8,0.06844703108072281,-0.052156127989292145,0.07988469302654266,0.9930827021598816,0.9999999403953552,1.000000238418579,1.0000001192092896],[["Hair35_R",[0,0.1719989776611328,4.0978193283081055e-8,-0.1205706000328064,-0.04455515742301941,0.12126009166240692,0.984263002872467,1,0.9999998807907104,0.9999999403953552],[["Hair36_R",[-4.470348358154297e-8,0.12351469695568085,-3.725290298461914e-9,-0.037015192210674286,0.20051102340221405,-0.27156707644462585,0.9405725002288818,1,0.9999999403953552,0.9999999403953552],[["Hair37_R",[1.4901161193847656e-8,0.11350540816783905,1.210719347000122e-8,0.17390818893909454,0.06217547133564949,-0.05911845713853836,0.981017529964447,0.9999998807907104,1,1.0000001192092896],[["Hair38_R",[1.4901161193847656e-8,0.12201984971761703,-7.450580596923828e-9,-0.11115529388189316,-0.12800024449825287,0.21284005045890808,0.9622679352760315,1,0.9999998211860657,0.9999997019767761],[]]]]]]]]]]]]]]]],["Hair31_L",[0.0006344257271848619,0.14939913153648376,-0.07985317707061768,-0.9843132495880127,-0.06418239325284958,-0.06423899531364441,0.15126599371433258,1.000000238418579,1.0000001192092896,1.0000004768371582],[["Hair32_L",[1.210719347000122e-8,0.0727984756231308,-1.979060471057892e-8,0.056747280061244965,-0.01272169966250658,0.02604222483932972,0.9979678988456726,1,0.9999999403953552,0.9999998211860657],[["Hair33_L",[-1.3969838619232178e-8,0.10768461972475052,-1.2898817658424377e-7,0.026520270854234695,-0.010424706153571606,0.019086375832557678,0.9994117617607117,1,1,1],[["Hair34_L",[3.725290298461914e-9,0.21081344783306122,1.3154931366443634e-8,0.06844703108072281,0.052156127989292145,-0.07988469302654266,0.9930827021598816,0.9999999403953552,1.000000238418579,1.0000001192092896],[["Hair35_L",[0,0.1719989776611328,4.0978193283081055e-8,-0.1205706000328064,0.04455515742301941,-0.12126009166240692,0.984263002872467,1,0.9999998807907104,0.9999999403953552],[["Hair36_L",[4.470348358154297e-8,0.12351469695568085,-3.725290298461914e-9,-0.037015192210674286,-0.20051102340221405,0.27156707644462585,0.9405725002288818,1,0.9999999403953552,0.9999999403953552],[["Hair37_L",[-1.4901161193847656e-8,0.11350540816783905,1.210719347000122e-8,0.17390818893909454,-0.06217547133564949,0.05911845713853836,0.981017529964447,0.9999998807907104,1,1.0000001192092896],[["Hair38_L",[-1.4901161193847656e-8,0.12201984971761703,-7.450580596923828e-9,-0.11115529388189316,0.12800024449825287,-0.21284005045890808,0.9622679352760315,1,0.9999998211860657,0.9999997019767761],[]]]]]]]]]]]]]]]],["Sideburn1_R",[-0.08463571220636368,0.059588078409433365,0.027148611843585968,0.9995024800300598,0.019347738474607468,0.017921678721904755,0.017299650236964226,1.0000600814819336,1.0000001192092896,1.000059962272644],[["Sideburn2_R",[-3.14321368932724e-9,0.05695805698633194,1.1641532182693481e-9,0.0010487505933269858,0.07849115133285522,-0.0757785215973854,0.9940301179885864,0.9999999403953552,1,0.9999998211860657],[]]]],["Sideburn1_L",[0.08316104114055634,0.05958808586001396,0.02714860998094082,0.999524712562561,-0.018206028267741203,-0.017917050048708916,0.017257805913686752,1.0000168085098267,1,1.0000168085098267],[["Sideburn2_L",[3.958120942115784e-9,0.056958332657814026,-9.313225746154785e-10,0.001054661814123392,-0.07849068194627762,0.07578069716691971,0.9940298795700073,0.9999999403953552,0.9999999403953552,0.9999997019767761],[]]]],["FrontHair1",[-0.0801674947142601,0.12183096259832382,0.06070006638765335,0.9904160499572754,-0.09750665724277496,-0.09754859656095505,0.007277561351656914,1.0000026226043701,1.0000001192092896,1],[["FrontHair1_2",[-1.4901161193847656e-8,0.06380410492420197,-1.5832483768463135e-8,0.07633671164512634,0.10690629482269287,-0.12024792283773422,0.9840143322944641,1.0000001192092896,1,0.9999999403953552],[]]]],["FrontHair2",[-0.003160707652568817,0.1368127316236496,0.09830453991889954,0.9842233657836914,0.07744413614273071,0.07740821689367294,0.13897834718227386,1,1,1.0000004768371582],[["FrontHair2_2",[7.08916516600766e-8,0.05305123329162598,-3.7533936847466975e-8,0.19803227484226227,-0.012096422724425793,0.03645673021674156,0.9794427156448364,1,0.9999999403953552,1.0000001192092896],[]]]],["FrontHair3",[0.07869279384613037,0.12183097004890442,0.060700077563524246,0.9904158711433411,0.09750817716121674,0.09754922240972519,0.007277223747223616,1.000002384185791,1,1],[["FrontHair3_2",[2.421438694000244e-8,0.06380397081375122,-1.862645149230957e-9,0.0763363465666771,-0.10690655559301376,0.12024860084056854,0.9840142726898193,0.9999998807907104,1,0.9999998211860657],[]]]],["LeftEye",[0.028106696903705597,0.04913211241364479,0.02728760987520218,-3.7235006744573695e-11,-4.789836638484455e-15,-8.845238583866293e-21,1,1,1,1.0000001192092896],[]],["RightEye",[-0.028988290578126907,0.04911495000123978,0.02688763290643692,-3.7235006744573695e-11,-4.789836638484455e-15,-8.845238583866293e-21,1,1,1,1.0000001192092896],[]]]]]],["Right_shoulder",[-0.01879039779305458,0.1747818887233734,-0.000242409689235501,-0.5975834727287292,0.4451692998409271,0.5144044160842896,0.4243896007537842,0.9999998211860657,0.9999998211860657,0.9999996423721313],[["Right_arm",[5.98272009710854e-8,0.06950049847364426,-1.0726226662427507e-7,-0.17996826767921448,0.1933135837316513,-0.08750152587890625,0.9605127573013306,1.0000001192092896,1,1],[["Right_elbow",[8.39414795450466e-8,0.21507789194583893,-4.481635684783214e-8,-0.007842862978577614,-0.001910681719891727,0.013383752666413784,0.9998778700828552,0.9999998807907104,1,0.9999998807907104],[["Right_wrist",[-4.8142922537408595e-8,0.1890689581632614,-1.6776754208081002e-8,0.0038253096863627434,0.0192723385989666,-0.03635840117931366,0.9991456866264343,0.9999529123306274,0.9999997615814209,0.9999743700027466],[["Thumb0_R",[-0.0015274710021913052,0.013934989459812641,-0.01448698528110981,-0.3260788023471832,0.172303706407547,0.11251583695411682,0.9226723313331604,1.0000003576278687,1.0000004768371582,1.0000001192092896],[["Thumb1_R",[-4.6566128730773926e-8,0.04147572070360184,1.862645149230957e-9,0.13270437717437744,-0.0907953605055809,-0.03271203488111496,0.9864460825920105,1.0000001192092896,0.9999995827674866,0.9999997615814209],[["Thumb2_R",[-5.9600079538313366e-8,0.018970059230923653,2.214782846010621e-8,0.027074433863162994,-0.02721540257334709,0.001372111844830215,0.9992619156837463,1.0000001192092896,1.0000001192092896,1.0000003576278687],[]]]]]],["LittleFinger1_R",[0.019163303077220917,0.064740851521492,0.011390747502446175,-0.030019935220479965,0.001478685182519257,0.03402372822165489,0.9989690184593201,1.0000001192092896,1,1.0000001192092896],[["LittleFinger2_R",[1.4120120184202278e-8,0.027081796899437904,1.6113239098558552e-7,0.034664399921894073,-0.04437341168522835,0.024598155170679092,0.9981104731559753,0.9999998807907104,0.9999995827674866,0.9999997615814209],[["LittleFinger3_R",[3.079840027453429e-8,0.01231003925204277,4.4105231467028716e-8,-0.07590803503990173,0.07809292525053024,-0.021812133491039276,0.9938127994537354,0.9999999403953552,0.9999998807907104,0.9999999403953552],[]]]]]],["RingFinger1_R",[0.0054548936896026134,0.06837297230958939,0.006870504934340715,-0.0357401967048645,0.014316110871732235,0.01984764076769352,0.9990614652633667,1.0000001192092896,1.0000003576278687,1.000000238418579],[["RingFinger2_R",[6.366883553710068e-8,0.033084455877542496,-4.110254536726643e-8,0.00818269606679678,-0.007274249568581581,0.0013416421134024858,0.9999392628669739,0.9999997615814209,0.9999998807907104,0.9999998211860657],[["RingFinger3_R",[3.671115322845253e-8,0.017962312325835228,1.2718248854071135e-7,-0.01127212680876255,-0.01896950602531433,0.04194747284054756,0.99887615442276,1,0.9999998807907104,0.9999999403953552],[]]]]]],["MiddleFinger1_R",[-0.007915524765849113,0.07169001549482346,-0.0021115546114742756,-0.02076011896133423,0.01734338141977787,-0.0033277312759310007,0.9996285438537598,1.000000238418579,1.0000001192092896,1.000000238418579],[["MiddleFinger2_R",[5.722484708314823e-9,0.035151466727256775,7.455829376112888e-8,-0.006091028917580843,-0.005398651584982872,0.015210472047328949,0.9998512268066406,1,0.9999999403953552,0.9999998807907104],[["MiddleFinger3_R",[6.05359673500061e-8,0.019062386825680733,-5.960464477539063e-8,0.005041174590587616,-0.038143955171108246,0.051979146897792816,0.9979067444801331,1,1,0.9999998807907104],[]]]]]],["IndexFinger1_R",[-0.017795158550143242,0.07101564109325409,-0.014736505225300789,-0.01829482987523079,0.006327447015792131,0.011805253103375435,0.9997429251670837,1.0000001192092896,1.000000238418579,1.000000238418579],[["IndexFinger2_R",[8.187744526821916e-8,0.031378790736198425,1.3781348684460681e-7,-0.005569496192038059,-0.005402309820055962,0.014982388354837894,0.9998576641082764,0.9999997615814209,0.9999998807907104,0.9999998211860657],[["IndexFinger3_R",[-3.167941997617163e-8,0.015219328925013542,1.4340538712076523e-7,0.02257685363292694,-0.0029471623711287975,-0.02278923988342285,0.9994810223579407,1,0.9999995827674866,0.9999998807907104],[]]]]]]]]]]]]]],["Left_shoulder",[0.018790405243635178,0.1747818887233734,-0.0002424004633212462,-0.5975832939147949,-0.4451693594455719,-0.5144046545028687,0.42438948154449463,0.9999998807907104,0.9999998807907104,0.9999995827674866],[["Left_arm",[1.3969838619232178e-9,0.06950058043003082,-1.0337680578231812e-7,-0.17996826767921448,-0.19331371784210205,0.08750160038471222,0.9605127573013306,1.0000003576278687,0.9999999403953552,1.0000001192092896],[["Left_elbow",[-2.5659550928480712e-8,0.21507783234119415,1.0907623959610646e-7,-0.007842880673706532,0.0019107592524960637,-0.013383783400058746,0.9998778700828552,0.9999998807907104,0.9999999403953552,1.0000001192092896],[["Left_wrist",[-1.5220155802353474e-8,0.1890687644481659,-4.7414722814664856e-8,0.003825301770120859,-0.019272271543741226,0.03635850548744202,0.9991456866264343,0.9999527931213379,0.9999997019767761,0.9999744296073914],[["Thumb0_L",[0.0015275380574166775,0.013934840448200703,-0.014487024396657944,-0.3351394832134247,-0.17010395228862762,-0.12714055180549622,0.9179223775863647,0.9999998807907104,0.9999998807907104,0.9999998211860657],[["Thumb1_L",[-1.6947907965914055e-8,0.04145832359790802,5.602798580639501e-8,0.16773849725723267,0.07295140624046326,0.07105859369039536,0.9805572628974915,1.0000003576278687,1.0000001192092896,1.0000004768371582],[["Thumb2_L",[-6.332993507385254e-8,0.019382163882255554,2.60770320892334e-8,0.006650859955698252,0.037380147725343704,-0.031075097620487213,0.9987958073616028,0.9999998807907104,0.9999998211860657,0.9999997615814209],[]]]]]],["LittleFinger1_L",[-0.01916319690644741,0.06474068760871887,0.011390762403607368,-0.030019866302609444,-0.0014784729573875666,-0.03402400389313698,0.9989689588546753,0.9999997615814209,1,0.9999995231628418],[["LittleFinger2_L",[2.514570951461792e-8,0.027081817388534546,2.8870999813079834e-8,0.03466673940420151,0.04437600448727608,-0.024599377065896988,0.9981101751327515,0.9999999403953552,1,1.0000001192092896],[["LittleFinger3_L",[8.014277597112596e-8,0.012310044839978218,3.073186150004403e-8,-0.07591863721609116,-0.0781082957983017,0.021822672337293625,0.9938104748725891,1,1.0000003576278687,1.000000238418579],[]]]]]],["RingFinger1_L",[-0.005454880651086569,0.06837291270494461,0.0068704127334058285,-0.0357399582862854,-0.014315797947347164,-0.019847838208079338,0.9990614652633667,0.9999997019767761,1,0.9999999403953552],[["RingFinger2_L",[2.394732412369649e-8,0.03308451548218727,-2.8065223034445808e-8,0.008181936107575893,0.0072730788961052895,-0.001341068185865879,0.9999392628669739,0.9999997615814209,0.9999998807907104,0.9999998211860657],[["RingFinger3_L",[-1.004644190061299e-8,0.01796233281493187,-3.7867677882275075e-9,-0.011276206001639366,0.01896512135863304,-0.04194345325231552,0.9988764524459839,1.0000001192092896,1,1.000000238418579],[]]]]]],["MiddleFinger1_L",[0.007915681228041649,0.07168976217508316,-0.002111495938152075,-0.02076040767133236,-0.017343644052743912,0.003328082850202918,0.999628484249115,0.9999997019767761,0.9999998807907104,0.9999998807907104],[["MiddleFinger2_L",[7.450580596923828e-9,0.03515138849616051,-1.30385160446167e-7,-0.006087168585509062,0.00540324067696929,-0.015214309096336365,0.9998511672019958,1.0000001192092896,1.000000238418579,1.0000001192092896],[["MiddleFinger3_L",[-6.839679400627574e-8,0.019062433391809464,-5.216803344865184e-8,0.0050251055508852005,0.03812279924750328,-0.05196557566523552,0.997908353805542,0.9999999403953552,0.9999999403953552,1.000000238418579],[]]]]]],["IndexFinger1_L",[0.01779543049633503,0.07101528346538544,-0.014736324548721313,-0.01829489879310131,-0.0063277240842580795,-0.011805121786892414,0.9997429847717285,0.9999997615814209,0.9999998807907104,0.9999998807907104],[["IndexFinger2_L",[-5.397573588084015e-8,0.031378962099552155,-1.8634620957413972e-8,-0.0055688172578811646,0.0054030949249863625,-0.014982689172029495,0.9998576641082764,0.9999999403953552,1.0000001192092896,0.9999999403953552],[["IndexFinger3_L",[5.59308048764251e-8,0.015219523571431637,-1.0254986904101315e-7,0.022577444091439247,0.0029488063883036375,0.022788310423493385,0.9994810223579407,1.0000001192092896,1.0000001192092896,1],[]]]]]]]]]]]]]]]]]],["Right_leg",[-0.07171519845724106,0.11545264720916748,0.013953566551208496,1,-3.3001185012921383e-15,7.549787994776125e-8,4.371138473402425e-8,1,1,1],[["Right_knee",[-0.005757778882980347,-0.38112956285476685,-0.02434052713215351,-0.9978883862495422,0.00334024615585804,0.0032219490967690945,0.06478682905435562,1,1,1.000006079673767],[["Right_ankle",[-1.04482751339674e-8,0.41037216782569885,-5.238689482212067e-10,-0.5227291584014893,0.003925474360585213,-0.001032647560350597,0.8524892330169678,1,1.0000063180923462,1.0000017881393433],[["Right_toe",[1.4420045157947925e-9,0.13481487333774567,2.1529187321789323e-9,-0.014249805361032486,-0.9540945291519165,0.295349657535553,0.04763595014810562,1.000000238418579,0.9999997615814209,1.000000238418579],[]]]]]],["Right_leg_2",[-1.2538918348070638e-8,1.2243042135651194e-7,4.406330855744045e-9,-0.9994344711303711,0.007606137543916702,0.007319035939872265,0.031929031014442444,1.000003695487976,0.9999999403953552,1.0000666379928589],[]]]],["Left_leg",[0.07171519845724106,0.11545264720916748,0.013953600078821182,1,-3.3001185012921383e-15,7.549787994776125e-8,4.371138473402425e-8,1,1,1],[["Left_knee",[0.005757778882980347,-0.38112956285476685,-0.02434053272008896,-0.997888445854187,-0.0033341345842927694,-0.003221433609724045,0.0647864118218422,1.0000001192092896,1,0.9999916553497314],[["Left_ankle",[4.71482053399086e-9,0.41037219762802124,-8.498318493366241e-9,-0.5227322578430176,-0.003925326745957136,0.0010325344046577811,0.8524872660636902,1,1.000006914138794,1.0000017881393433],[["Left_toe",[5.078697018490175e-9,0.13481630384922028,3.6854230778260444e-9,-0.00705345906317234,0.9549729228019714,-0.2956053912639618,0.024385549128055573,1.0000001192092896,0.9999997615814209,1],[]]]]]],["Left_leg_2",[1.7263394269662058e-8,1.2243042135651194e-7,3.0436120290744384e-9,-0.9994344711303711,-0.0076051512733101845,-0.007318862713873386,0.031929049640893936,1.000003695487976,0.9999998211860657,1.0000663995742798],[]]]],["ButtTail1",[-1.1981897252155704e-8,-0.02092289924621582,0.050255756825208664,0.5375427007675171,-1.0052156085293973e-7,6.408001951285769e-8,0.8432365655899048,1,1.000000238418579,1.0000001192092896],[["ButtTail2",[1.0191943551065174e-21,0.0586438924074173,-7.127986201282965e-9,-0.12333579361438751,6.8843801339713625e-15,9.183842075222767e-15,0.9923650026321411,1,0.9999998807907104,1],[["ButtTail3",[4.235164736271502e-22,0.10357242822647095,-2.2351741790771484e-8,-0.03757038712501526,1.1912510444744839e-7,-4.478739157320888e-9,0.9992939829826355,0.9999998807907104,0.9999999403953552,1],[["ButtTail4",[-5.4619776109214764e-15,0.11008850485086441,7.876878527213194e-8,-0.1003396213054657,-1.186076019621396e-7,-1.1961430068652135e-8,0.9949532747268677,1.000000238418579,0.9999998211860657,1],[["ButtTail5",[2.010920699710984e-21,0.09006699919700623,-1.0566629526920224e-7,0.105939120054245,-7.351681011191508e-15,1.4716131891095822e-14,0.9943727254867554,0.9999998807907104,1.0000001192092896,1.0000001192092896],[["ButtTail6",[-1.6940658945086007e-21,0.07949180901050568,-1.4901161193847656e-8,0.14714114367961884,-5.748782119828835e-15,-1.0824529435703059e-15,0.9891155958175659,1.0000001192092896,1,0.9999998807907104],[["ButtTail7",[1.6940658945086007e-21,0.08018326759338379,4.470348358154297e-8,0.06513970345258713,-2.4075060758713736e-15,-1.014999792453065e-15,0.9978761672973633,0.9999998807907104,0.9999999403953552,0.9999998211860657],[]]]]]]]]]]]]]]]],["Body",[0,0,0,0,0,0,1,1,1,1],[["Ia body.007_0",[0,0,0,0,0,0,1,1,1,1],[]],["Ia body.007_1",[0,0,0,0,0,0,1,1,1,1],[]],["Ia body.007_2",[0,0,0,0,0,0,1,1,1,1],[]],["Ia body.007_3",[0,0,0,0,0,0,1,1,1,1],[]],["Ia body.007_4",[0,0,0,0,0,0,1,1,1,1],[]],["Ia body.007_5",[0,0,0,0,0,0,1,1,1,1],[]],["Ia body.007_6",[0,0,0,0,0,0,1,1,1,1],[]],["Ia body.007_7",[0,0,0,0,0,0,1,1,1,1],[]]]]]]';
  new i.Vector3();
  const F0 = new i.Quaternion().setFromAxisAngle(
      new i.Vector3(1, 0, 0),
      Math.PI / 2
    ),
    W0 = new i.Quaternion().setFromAxisAngle(
      new i.Vector3(0, 1, 0),
      Math.PI * 0.8
    ),
    V0 = new i.Quaternion().setFromAxisAngle(
      new i.Vector3(0, 1, 0),
      -Math.PI * 0.8
    );
  new i.Quaternion().setFromAxisAngle(new i.Vector3(0, 1, 0), Math.PI);
  const pt = new i.Vector3();
  new i.Vector3(),
    new i.Vector3(),
    new i.Vector3(),
    new i.Vector3(),
    new i.Vector3(),
    new i.Quaternion(),
    new i.Quaternion(),
    new i.Matrix4();
  const he = (e) => {
      e.matrix.copy(e.matrixWorld),
        e.parent &&
          e.matrix.premultiply(
            new i.Matrix4().copy(e.parent.matrixWorld).invert()
          ),
        e.matrix.decompose(e.position, e.quaternion, e.scale);
      for (let t = 0; t < e.children.length; t++) he(e.children[t]);
    },
    ce = (e, t) => {
      for (let o = 0; o < e.length; o++) {
        const r = e[o];
        if (r.name === t) return r;
        {
          const a = ce(r.children, t);
          if (a) return a;
        }
      }
      return null;
    },
    H0 = (e, t) => {
      for (let r = 0; r < e.bones.length; r++) {
        const a = e.bones[r];
        ce(t.bones, a.name).matrixWorld.copy(a.matrixWorld);
      }
      const o = t.bones[0].parent;
      he(o), t.calculateInverses();
    },
    D0 = new i.ConeBufferGeometry(0.05, 0.2, 3).applyMatrix4(
      new i.Matrix4().makeRotationFromQuaternion(
        new i.Quaternion().setFromUnitVectors(
          new i.Vector3(0, 1, 0),
          new i.Vector3(0, 0, 1)
        )
      )
    ),
    de = {},
    I0 = (e) => {
      let t = de[e];
      return (
        t ||
          ((t = new i.MeshPhongMaterial({ color: e, flatShading: !0 })),
          (de[e] = t)),
        t
      );
    },
    T = (e = 255) => {
      const t = new i.Mesh(D0, I0(e));
      return (t.frustumCulled = !1), (t.updateMatrixWorld = () => {}), t;
    },
    B0 = () => ({
      eyes: T(16711680),
      head: T(16744576),
      chest: T(16776960),
      leftShoulder: T(65280),
      rightShoulder: T(32768),
      leftUpperArm: T(65535),
      rightUpperArm: T(32896),
      leftLowerArm: T(255),
      rightLowerArm: T(128),
      leftHand: T(16777215),
      rightHand: T(8421504),
      hips: T(16711680),
      leftUpperLeg: T(16776960),
      rightUpperLeg: T(8421376),
      leftLowerLeg: T(65280),
      rightLowerLeg: T(32768),
      leftFoot: T(16777215),
      rightFoot: T(8421504),
    }),
    Q0 = (e) => {
      const t = [],
        o = (r) => {
          for (let a = 0; a < r.length; a++) {
            const s = r[a];
            s.children.length === 0
              ? t.includes(s) || t.push(s)
              : o(s.children);
          }
        };
      return o(e.bones), t;
    },
    pe = (e, t) => {
      for (; e; e = e.parent) if (t(e)) return e;
      return null;
    },
    K = (e, t) => {
      let o = null;
      for (; e; e = e.parent) t(e) && (o = e);
      return o;
    },
    ue = (e, t) => {
      for (let o = 0; e; e = e.parent, o++) if (e === t) return o;
      return 1 / 0;
    },
    E0 = (e, t) => {
      const o = (r) => {
        if (t(r)) return r;
        for (let a = 0; a < r.children.length; a++) {
          const s = o(r.children[a]);
          if (s) return s;
        }
        return null;
      };
      return o(e);
    },
    A = (e, t) => {
      let o = 0;
      for (let r = 0; r < e.length; r++) t.test(e[r]) && o++;
      return o;
    },
    ge = (e) => e.bones.find((t) => /hip/i.test(t.name)),
    C0 = (e) => {
      const t = e
          .map((r) => {
            const a = K(r, (s) => /head/i.test(s.name));
            return a || null;
          })
          .filter((r) => r),
        o = t.length > 0 ? t[0] : null;
      return o || null;
    },
    fe = (e, t) => {
      const o = t ? /l/i : /r/i,
        r = e
          .map((s) => {
            const n = K(
              s,
              (l) => /eye/i.test(l.name) && o.test(l.name.replace(/eye/gi, ""))
            );
            return n || null;
          })
          .filter((s) => s)
          .sort((s, n) => {
            const l = s.name.replace(/shoulder/gi, ""),
              d = A(l, /l/i) - A(l, /r/i),
              c = n.name.replace(/shoulder/gi, ""),
              u = A(c, /l/i) - A(c, /r/i);
            return t ? u - d : d - u;
          }),
        a = r.length > 0 ? r[0] : null;
      return a || null;
    },
    N0 = (e, t) => {
      for (let o = e; o; o = o.parent) if (o.parent === t) return o;
      return null;
    },
    me = (e, t) => {
      const o = t ? /l/i : /r/i,
        r = e
          .map((s) => {
            const n = pe(
              s,
              (l) =>
                /shoulder/i.test(l.name) &&
                o.test(l.name.replace(/shoulder/gi, ""))
            );
            if (n) {
              const l = ue(s, n);
              return l >= 3 ? { bone: n, distance: l } : null;
            } else return null;
          })
          .filter((s) => s)
          .sort((s, n) => {
            const l = n.distance - s.distance;
            if (l !== 0) return l;
            {
              const d = s.bone.name.replace(/shoulder/gi, ""),
                c = A(d, /l/i) - A(d, /r/i),
                u = n.bone.name.replace(/shoulder/gi, ""),
                L = A(u, /l/i) - A(u, /r/i);
              return t ? L - c : c - L;
            }
          }),
        a = r.length > 0 ? r[0].bone : null;
      return a || null;
    },
    Le = (e) => E0(e, (t) => /hand|wrist/i.test(t.name)),
    ye = (e, t) => {
      const o = t ? /l/i : /r/i,
        r = e
          .map((s) => {
            const n = K(
              s,
              (l) =>
                /foot|ankle/i.test(l.name) &&
                o.test(l.name.replace(/foot|ankle/gi, ""))
            );
            if (n) {
              const l = K(
                n,
                (d) =>
                  /leg|thigh/i.test(d.name) &&
                  o.test(d.name.replace(/leg|thigh/gi, ""))
              );
              if (l) {
                const d = ue(n, l);
                return d >= 2 ? { footBone: n, distance: d } : null;
              } else return null;
            } else return null;
          })
          .filter((s) => s)
          .sort((s, n) => {
            const l = n.distance - s.distance;
            if (l !== 0) return l;
            {
              const d = s.footBone.name.replace(/foot|ankle/gi, ""),
                c = A(d, /l/i) - A(d, /r/i),
                u = n.footBone.name.replace(/foot|ankle/gi, ""),
                L = A(u, /l/i) - A(u, /r/i);
              return t ? L - c : c - L;
            }
          }),
        a = r.length > 0 ? r[0].footBone : null;
      return a || null;
    },
    we = (e) => {
      for (; ; e = e.parent) if (!e.isBone) return e;
      return null;
    },
    Me = (e, t, o) => {
      const [r, a, s] = e,
        n = new t();
      (n.name = r),
        n.position.fromArray(a, 0),
        n.quaternion.fromArray(a, 3),
        n.scale.fromArray(a, 3 + 4);
      for (let l = 0; l < s.length; l++) n.add(Me(s[l], o, o));
      return n;
    },
    q0 = (e) => Me(e, i.Object3D, i.Bone),
    O0 = (e) => {
      const t = q0(JSON.parse(e));
      return new i.Skeleton(t.children);
    };
  class _e {
    constructor(t, o = {}) {
      const r = (() => {
        let h = t;
        if ((h && !h.isMesh && (h = h.scene), !h)) {
          const y = new i.Scene(),
            w = new i.Object3D();
          (w.isSkinnedMesh = !0),
            (w.skeleton = null),
            (w.bind = function (I) {
              this.skeleton = I;
            }),
            w.bind(O0(k0)),
            y.add(w);
          const V = ge(w.skeleton),
            H = we(V);
          y.add(H), (h = y);
        }
        return h;
      })();
      (this.model = r), (this.options = o), r.updateMatrixWorld(!0);
      const a = [];
      r.traverse((h) => {
        h.isSkinnedMesh && a.push(h);
      }),
        a.sort((h, y) => y.skeleton.bones.length - h.skeleton.bones.length),
        (this.skinnedMeshes = a);
      const s = a.find((h) => h.skeleton.bones[0].parent) || null,
        n = s && s.skeleton,
        l = n
          ? a.find(
              (h) =>
                h.skeleton !== n && h.skeleton.bones.length >= n.bones.length
            )
          : null,
        d = l && l.skeleton;
      if ((d && (H0(d, n), l.bind(n)), o.debug)) {
        const h = B0();
        for (const y in h) this.model.add(h[y]);
        this.debugMeshes = h;
      } else this.debugMeshes = null;
      const c = Q0(n),
        u = fe(c, !0),
        L = fe(c, !1),
        m = C0(c),
        M = m.parent,
        S = M.parent,
        k = ge(n),
        D = N0(S, k),
        g = me(c, !0),
        x = Le(g),
        P = x.parent,
        B = P.parent,
        tt = me(c, !1),
        _ = Le(tt),
        R = _.parent,
        N = R.parent,
        et = ye(c, !0),
        xe = et.parent,
        ve = xe.parent,
        Te = ye(c, !1),
        Pe = Te.parent,
        U0 = Pe.parent,
        f = {
          Hips: k,
          Spine: D,
          Chest: S,
          Neck: M,
          Head: m,
          Left_shoulder: g,
          Left_arm: B,
          Left_elbow: P,
          Left_wrist: x,
          Left_leg: ve,
          Left_knee: xe,
          Left_ankle: et,
          Right_shoulder: tt,
          Right_arm: N,
          Right_elbow: R,
          Right_wrist: _,
          Right_leg: U0,
          Right_knee: Pe,
          Right_ankle: Te,
        };
      this.modelBones = f;
      const Q = we(k),
        z0 = () => {
          if (u && L)
            return u
              .getWorldPosition(new i.Vector3())
              .add(L.getWorldPosition(new i.Vector3()))
              .divideScalar(2);
          {
            const h = m
              .getWorldPosition(new i.Vector3())
              .sub(M.getWorldPosition(new i.Vector3()));
            return (
              h.z < 0 && (h.z *= -1), m.getWorldPosition(new i.Vector3()).add(h)
            );
          }
        },
        E =
          x
            .getWorldPosition(new i.Vector3())
            .sub(m.getWorldPosition(new i.Vector3())).x < 0,
        bt = new i.Vector3(0, 1, 0).applyQuaternion(Q.quaternion).z < -0.5,
        be =
          new i.Vector3(0, 0, -1).applyQuaternion(
            ve
              .getWorldQuaternion(new i.Quaternion())
              .premultiply(Q.quaternion.clone().invert())
          ).y < 0.5;
      (this.flipZ = E), (this.flipY = bt), (this.flipLeg = be);
      const ut = Q.quaternion.clone(),
        q = new i.Matrix4().copy(Q.matrixWorld).invert();
      Q.position.set(0, 0, 0),
        Q.quaternion.set(0, 0, 0, 1),
        Q.scale.set(1, 1, 1),
        Q.updateMatrix(),
        m.traverse((h) => {
          (h.savedPosition = h.position.clone()),
            (h.savedMatrixWorld = h.matrixWorld.clone());
        });
      const Ae = [],
        Re = (h) => {
          for (let y = 0; y < h.length; y++) {
            const w = h[y];
            /hair/i.test(w.name) && Ae.push(w), Re(w.children);
          }
        };
      Re(n.bones);
      const j0 = c
        .filter((h) => /hair/i.test(h.name))
        .map((h) => {
          for (; h; h = h.parent) if (h.parent === m) return h;
          return null;
        })
        .filter((h) => h);
      (this.allHairBones = Ae),
        (this.hairBones = j0),
        (this.springBoneManager = null),
        o.hair &&
          new Promise((h, y) => {
            t || (t = {}),
              t.parser || (t.parser = { json: { extensions: {} } }),
              t.parser.json.extensions || (t.parser.json.extensions = {}),
              t.parser.json.extensions.VRM ||
                ((t.parser.json.extensions.VRM = {
                  secondaryAnimation: {
                    boneGroups: this.hairBones.map((w) => {
                      const V = [],
                        H = (I) => {
                          V.push(this.allHairBones.indexOf(I)),
                            I.children.length > 0 && H(I.children[0]);
                        };
                      return (
                        H(w),
                        {
                          comment: w.name,
                          stiffiness: 0.5,
                          gravityPower: 0.2,
                          gravityDir: { x: 0, y: -1, z: 0 },
                          dragForce: 0.3,
                          center: -1,
                          hitRadius: 0.02,
                          bones: V,
                          colliderGroups: [],
                        }
                      );
                    }),
                  },
                }),
                (t.parser.getDependency = async (w, V) => {
                  if (w === "node") return this.allHairBones[V];
                  throw new Error("unsupported type");
                })),
              new e0().import(t).then((w) => {
                this.springBoneManager = w;
              });
          });
      const W = (h, y) => {
          const w = c
            .filter(
              (H) =>
                h.test(H.name) &&
                pe(H, (I) => I === f.Left_wrist || I === f.Right_wrist)
            )
            .sort((H, I) => {
              const He = H.name.replace(h, ""),
                De = A(He, /l/i) - A(He, /r/i),
                Ie = I.name.replace(h, ""),
                Be = A(Ie, /l/i) - A(Ie, /r/i);
              return y ? Be - De : De - Be;
            });
          let V = w.length > 0 ? K(w[0], (H) => h.test(H.name)) : null;
          return V != null && V.parent && (V = V.parent), V;
        },
        G0 = {
          left: {
            thumb: W(/thumb/gi, !0),
            index: W(/index/gi, !0),
            middle: W(/middle/gi, !0),
            ring: W(/ring/gi, !0),
            little: W(/little/gi, !0) || W(/pinky/gi, !0),
          },
          right: {
            thumb: W(/thumb/gi, !1),
            index: W(/index/gi, !1),
            middle: W(/middle/gi, !1),
            ring: W(/ring/gi, !1),
            little: W(/little/gi, !1) || W(/pinky/gi, !1),
          },
        };
      this.fingerBones = G0;
      const j = {},
        C = (h) => {
          const y = f[h].name;
          return j[y] || (j[y] = new i.Quaternion()), j[y];
        };
      bt &&
        ["Hips"].forEach((h) => {
          C(h).premultiply(
            new i.Quaternion().setFromAxisAngle(
              new i.Vector3(1, 0, 0),
              -Math.PI / 2
            )
          );
        }),
        E &&
          ["Hips"].forEach((h) => {
            C(h).premultiply(
              new i.Quaternion().setFromAxisAngle(
                new i.Vector3(0, 1, 0),
                Math.PI
              )
            );
          }),
        be &&
          ["Left_leg", "Right_leg"].forEach((h) => {
            C(h).premultiply(
              new i.Quaternion().setFromAxisAngle(
                new i.Vector3(1, 0, 0),
                Math.PI / 2
              )
            );
          });
      const $0 = E ? B : N,
        Se = E ? P : R,
        Y0 = E ? x : _,
        gt = new i.Quaternion()
          .setFromAxisAngle(new i.Vector3(0, 1, 0), -Math.PI / 2)
          .premultiply(
            new i.Quaternion().setFromRotationMatrix(
              new i.Matrix4().lookAt(
                new i.Vector3(0, 0, 0),
                Se.getWorldPosition(new i.Vector3())
                  .applyMatrix4(q)
                  .sub($0.getWorldPosition(new i.Vector3()).applyMatrix4(q))
                  .applyQuaternion(ut),
                new i.Vector3(0, 1, 0)
              )
            )
          ),
        ke = new i.Quaternion()
          .setFromAxisAngle(new i.Vector3(0, 1, 0), -Math.PI / 2)
          .premultiply(
            new i.Quaternion().setFromRotationMatrix(
              new i.Matrix4().lookAt(
                new i.Vector3(0, 0, 0),
                Y0.getWorldPosition(new i.Vector3())
                  .applyMatrix4(q)
                  .sub(Se.getWorldPosition(new i.Vector3()).applyMatrix4(q))
                  .applyQuaternion(ut),
                new i.Vector3(0, 1, 0)
              )
            )
          ),
        Z0 = E ? N : B,
        Fe = E ? R : P,
        J0 = E ? _ : x,
        ft = new i.Quaternion()
          .setFromAxisAngle(new i.Vector3(0, 1, 0), Math.PI / 2)
          .premultiply(
            new i.Quaternion().setFromRotationMatrix(
              new i.Matrix4().lookAt(
                new i.Vector3(0, 0, 0),
                Fe.getWorldPosition(new i.Vector3())
                  .applyMatrix4(q)
                  .sub(Z0.getWorldPosition(new i.Vector3()).applyMatrix4(q))
                  .applyQuaternion(ut),
                new i.Vector3(0, 1, 0)
              )
            )
          ),
        We = new i.Quaternion()
          .setFromAxisAngle(new i.Vector3(0, 1, 0), Math.PI / 2)
          .premultiply(
            new i.Quaternion().setFromRotationMatrix(
              new i.Matrix4().lookAt(
                new i.Vector3(0, 0, 0),
                J0.getWorldPosition(new i.Vector3())
                  .applyMatrix4(q)
                  .sub(Fe.getWorldPosition(new i.Vector3()).applyMatrix4(q))
                  .applyQuaternion(ut),
                new i.Vector3(0, 1, 0)
              )
            )
          );
      C("Right_arm").multiply(gt.clone().invert()),
        C("Right_elbow").multiply(gt.clone()).premultiply(ke.clone().invert()),
        C("Left_arm").multiply(ft.clone().invert()),
        C("Left_elbow").multiply(ft.clone()).premultiply(We.clone().invert()),
        C("Left_leg").premultiply(
          new i.Quaternion().setFromAxisAngle(
            new i.Vector3(1, 0, 0),
            -Math.PI / 2
          )
        ),
        C("Right_leg").premultiply(
          new i.Quaternion().setFromAxisAngle(
            new i.Vector3(1, 0, 0),
            -Math.PI / 2
          )
        );
      for (const h in j) j[h].invert();
      o0(Q.children[0], { preRotations: j }),
        r.traverse((h) => {
          h.isSkinnedMesh &&
            h.bind(
              h.skeleton.bones.length === n.bones.length &&
                h.skeleton.bones.every((y, w) => y === n.bones[w])
                ? n
                : h.skeleton
            );
        }),
        bt &&
          f.Hips.quaternion.premultiply(
            new i.Quaternion().setFromAxisAngle(
              new i.Vector3(1, 0, 0),
              -Math.PI / 2
            )
          ),
        E &&
          f.Hips.quaternion.premultiply(
            new i.Quaternion().setFromAxisAngle(new i.Vector3(0, 1, 0), Math.PI)
          ),
        f.Right_arm.quaternion.premultiply(gt.clone().invert()),
        f.Right_elbow.quaternion
          .premultiply(gt)
          .premultiply(ke.clone().invert()),
        f.Left_arm.quaternion.premultiply(ft.clone().invert()),
        f.Left_elbow.quaternion
          .premultiply(ft)
          .premultiply(We.clone().invert()),
        r.updateMatrixWorld(!0),
        k.traverse((h) => {
          h.initialQuaternion = h.quaternion.clone();
        });
      const X0 = (h) => {
          const y = new i.Vector3();
          for (let w = 0; w < h.length; w++) y.add(h[w]);
          return y.divideScalar(h.length), y;
        },
        Ve = z0();
      (this.poseManager = new l0(this)),
        (this.shoulderTransforms = new M0(this)),
        (this.legsManager = new A0(this));
      const b = (h, y = h.parent) =>
        h
          .getWorldPosition(new i.Vector3())
          .sub(y.getWorldPosition(new i.Vector3()));
      this.initializeBonePositions({
        spine: b(f.Spine),
        chest: b(f.Chest, f.Spine),
        neck: b(f.Neck),
        head: b(f.Head),
        eyes: Ve.clone().sub(m.getWorldPosition(new i.Vector3())),
        leftShoulder: b(f.Right_shoulder),
        leftUpperArm: b(f.Right_arm),
        leftLowerArm: b(f.Right_elbow),
        leftHand: b(f.Right_wrist),
        rightShoulder: b(f.Left_shoulder),
        rightUpperArm: b(f.Left_arm),
        rightLowerArm: b(f.Left_elbow),
        rightHand: b(f.Left_wrist),
        leftUpperLeg: b(f.Right_leg),
        leftLowerLeg: b(f.Right_knee),
        leftFoot: b(f.Right_ankle),
        rightUpperLeg: b(f.Left_leg),
        rightLowerLeg: b(f.Left_knee),
        rightFoot: b(f.Left_ankle),
      }),
        (this.height = Ve.sub(
          X0([
            f.Left_ankle.getWorldPosition(new i.Vector3()),
            f.Right_ankle.getWorldPosition(new i.Vector3()),
          ])
        ).y),
        (this.shoulderWidth = f.Left_arm.getWorldPosition(
          new i.Vector3()
        ).distanceTo(f.Right_arm.getWorldPosition(new i.Vector3()))),
        (this.leftArmLength = this.shoulderTransforms.leftArm.armLength),
        (this.rightArmLength = this.shoulderTransforms.rightArm.armLength),
        (this.inputs = {
          hmd: this.poseManager.vrTransforms.head,
          leftGamepad: this.poseManager.vrTransforms.rightHand,
          rightGamepad: this.poseManager.vrTransforms.leftHand,
        }),
        (this.inputs.hmd.scaleFactor = 1),
        (this.lastModelScaleFactor = 1),
        (this.outputs = {
          eyes: this.shoulderTransforms.eyes,
          head: this.shoulderTransforms.head,
          hips: this.legsManager.hips,
          spine: this.shoulderTransforms.spine,
          chest: this.shoulderTransforms.transform,
          neck: this.shoulderTransforms.neck,
          leftShoulder: this.shoulderTransforms.leftShoulderAnchor,
          leftUpperArm: this.shoulderTransforms.leftArm.upperArm,
          leftLowerArm: this.shoulderTransforms.leftArm.lowerArm,
          leftHand: this.shoulderTransforms.leftArm.hand,
          rightShoulder: this.shoulderTransforms.rightShoulderAnchor,
          rightUpperArm: this.shoulderTransforms.rightArm.upperArm,
          rightLowerArm: this.shoulderTransforms.rightArm.lowerArm,
          rightHand: this.shoulderTransforms.rightArm.hand,
          leftUpperLeg: this.legsManager.leftLeg.upperLeg,
          leftLowerLeg: this.legsManager.leftLeg.lowerLeg,
          leftFoot: this.legsManager.leftLeg.foot,
          rightUpperLeg: this.legsManager.rightLeg.upperLeg,
          rightLowerLeg: this.legsManager.rightLeg.lowerLeg,
          rightFoot: this.legsManager.rightLeg.foot,
        }),
        (this.modelBoneOutputs = {
          Hips: this.outputs.hips,
          Spine: this.outputs.spine,
          Chest: this.outputs.chest,
          Neck: this.outputs.neck,
          Head: this.outputs.head,
          Left_shoulder: this.outputs.rightShoulder,
          Left_arm: this.outputs.rightUpperArm,
          Left_elbow: this.outputs.rightLowerArm,
          Left_wrist: this.outputs.rightHand,
          Left_leg: this.outputs.rightUpperLeg,
          Left_knee: this.outputs.rightLowerLeg,
          Left_ankle: this.outputs.rightFoot,
          Right_shoulder: this.outputs.leftShoulder,
          Right_arm: this.outputs.leftUpperArm,
          Right_elbow: this.outputs.leftLowerArm,
          Right_wrist: this.outputs.leftHand,
          Right_leg: this.outputs.leftUpperLeg,
          Right_knee: this.outputs.leftLowerLeg,
          Right_ankle: this.outputs.leftFoot,
        }),
        (this.microphoneWorker = null),
        (this.volume = 0),
        this.setMicrophoneMediaStream(o.microphoneMediaStream, {
          muted: o.muted,
          microphoneWorkletUrl: o.microphoneWorkletUrl,
        }),
        (this.lastTimestamp = Date.now()),
        this.shoulderTransforms.Start(),
        this.legsManager.Start(),
        (this.decapitated = !1),
        o.decapitate && this.decapitate();
    }
    initializeBonePositions(t) {
      this.shoulderTransforms.spine.position.copy(t.spine),
        this.shoulderTransforms.transform.position.copy(t.chest),
        this.shoulderTransforms.neck.position.copy(t.neck),
        this.shoulderTransforms.head.position.copy(t.head),
        this.shoulderTransforms.eyes.position.copy(t.eyes),
        this.shoulderTransforms.leftShoulderAnchor.position.copy(
          t.leftShoulder
        ),
        this.shoulderTransforms.leftArm.upperArm.position.copy(t.leftUpperArm),
        this.shoulderTransforms.leftArm.lowerArm.position.copy(t.leftLowerArm),
        this.shoulderTransforms.leftArm.hand.position.copy(t.leftHand),
        this.shoulderTransforms.rightShoulderAnchor.position.copy(
          t.rightShoulder
        ),
        this.shoulderTransforms.rightArm.upperArm.position.copy(
          t.rightUpperArm
        ),
        this.shoulderTransforms.rightArm.lowerArm.position.copy(
          t.rightLowerArm
        ),
        this.shoulderTransforms.rightArm.hand.position.copy(t.rightHand),
        this.legsManager.leftLeg.upperLeg.position.copy(t.leftUpperLeg),
        this.legsManager.leftLeg.lowerLeg.position.copy(t.leftLowerLeg),
        this.legsManager.leftLeg.foot.position.copy(t.leftFoot),
        this.legsManager.rightLeg.upperLeg.position.copy(t.rightUpperLeg),
        this.legsManager.rightLeg.lowerLeg.position.copy(t.rightLowerLeg),
        this.legsManager.rightLeg.foot.position.copy(t.rightFoot),
        this.shoulderTransforms.hips.updateMatrixWorld();
    }
    update() {
      const t = this.decapitated;
      this.springBoneManager && t && this.undecapitate();
      const o = this.inputs.hmd.scaleFactor;
      o !== this.lastModelScaleFactor &&
        (this.model.scale.set(o, o, o),
        (this.lastModelScaleFactor = o),
        this.springBoneManager &&
          this.springBoneManager.springBoneGroupList.forEach((s) => {
            s.forEach((n) => {
              n._worldBoneLength = n.bone
                .localToWorld(pt.copy(n._initialLocalChildPosition))
                .sub(n._worldPosition)
                .length();
            });
          })),
        this.shoulderTransforms.Update(),
        this.legsManager.Update();
      for (const s in this.modelBones) {
        const n = this.modelBones[s],
          l = this.modelBoneOutputs[s];
        s === "Hips" && n.position.copy(l.position),
          n.quaternion.multiplyQuaternions(l.quaternion, n.initialQuaternion),
          s === "Left_ankle" || s === "Right_ankle"
            ? n.quaternion.multiply(F0)
            : s === "Left_wrist"
            ? n.quaternion.multiply(W0)
            : s === "Right_wrist" && n.quaternion.multiply(V0),
          n.updateMatrixWorld();
      }
      const r = Date.now(),
        a = Math.min(r - this.lastTimestamp, 1e3);
      if (((this.lastTimestamp = r), this.options.fingers)) {
        const s = (n) => {
          const l = n ? this.fingerBones.left : this.fingerBones.right,
            d = n ? this.inputs.leftGamepad : this.inputs.rightGamepad;
          for (const c in l) {
            const u = l[c];
            if (u) {
              let L;
              c === "thumb"
                ? (L = (M, S) =>
                    M.setFromAxisAngle(
                      pt.set(0, n ? 1 : -1, 0),
                      d.grip * Math.PI * (S === 0 ? 0.125 : 0.25)
                    ))
                : c === "index"
                ? (L = (M, S) =>
                    M.setFromAxisAngle(
                      pt.set(0, 0, n ? -1 : 1),
                      d.pointer * Math.PI * 0.5
                    ))
                : (L = (M, S) =>
                    M.setFromAxisAngle(
                      pt.set(0, 0, n ? -1 : 1),
                      d.grip * Math.PI * 0.5
                    ));
              let m = 0;
              u.traverse((M) => {
                L(M.quaternion, m++);
              });
            }
          }
        };
        s(!0), s(!1);
      }
      if (
        (this.springBoneManager && this.springBoneManager.lateUpdate(a / 1e3),
        this.springBoneManager && t && this.decapitate(),
        this.options.visemes)
      ) {
        const s = Math.min(this.volume * 10, 1),
          n = (() => {
            const l = r % 2e3;
            return l >= 0 && l < 100
              ? l / 100
              : l >= 100 && l < 200
              ? 1 - (l - 100) / 100
              : 0;
          })();
        this.skinnedMeshes.forEach((l) => {
          const { morphTargetDictionary: d, morphTargetInfluences: c } = l;
          if (d && c) {
            const u = /.*_a+(?!\w+)/i,
              L = Object.keys(d).filter((P) => u.test(P));
            let m = d[L];
            m === void 0 && (m = d[26]), m !== void 0 && (c[m] = s);
            const M = /.*blink_*l(?:eft)*/i,
              S = Object.keys(d).filter((P) => M.test(P));
            let k = d[S];
            k === void 0 && (k = d[16]), k !== void 0 && (c[k] = n);
            const D = /.*blink_*r(?:ight)*/i,
              g = Object.keys(d).filter((P) => D.test(P));
            let x = d[g];
            x === void 0 && (x = d[17]), x !== void 0 && (c[x] = n);
          }
        });
      }
      if (this.debugMeshes)
        for (const s in this.debugMeshes) {
          const n = this.debugMeshes[s],
            l = this.outputs[s];
          n.matrixWorld.multiplyMatrices(this.model.matrixWorld, l.matrixWorld);
        }
    }
    async setMicrophoneMediaStream(t, o = {}) {
      this.microphoneWorker &&
        (this.microphoneWorker.close(),
        (this.microphoneWorker = null),
        setTimeout(() => {
          this.volume = 0;
        })),
        t &&
          ((this.microphoneWorker = new S0(t, o)),
          this.microphoneWorker.addEventListener("volume", (r) => {
            this.volume = this.volume * 0.8 + r.data * 0.2;
          }));
    }
    decapitate() {
      this.decapitated ||
        (this.modelBones.Head.traverse((t) => {
          !t.savedPosition ||
            !t.savedMatrixWorld ||
            (t.savedPosition.copy(t.position),
            t.savedMatrixWorld.copy(t.matrixWorld),
            t.position.set(NaN, NaN, NaN),
            t.matrixWorld.set(
              NaN,
              NaN,
              NaN,
              NaN,
              NaN,
              NaN,
              NaN,
              NaN,
              NaN,
              NaN,
              NaN,
              NaN,
              NaN,
              NaN,
              NaN,
              NaN
            ));
        }),
        this.debugMeshes &&
          [this.debugMeshes.eyes, this.debugMeshes.head].forEach((t) => {
            t.visible = !1;
          }),
        (this.decapitated = !0));
    }
    undecapitate() {
      this.decapitated &&
        (this.modelBones.Head.traverse((t) => {
          !t.savedPosition ||
            !t.savedMatrixWorld ||
            (t.position.copy(t.savedPosition),
            t.matrixWorld.copy(t.savedMatrixWorld));
        }),
        this.debugMeshes &&
          [this.debugMeshes.eyes, this.debugMeshes.head].forEach((t) => {
            t.visible = !0;
          }),
        (this.decapitated = !1));
    }
    setFloorHeight(t) {
      this.poseManager.vrTransforms.floorHeight = t;
    }
    getFloorHeight() {
      return this.poseManager.vrTransforms.floorHeight;
    }
    destroy() {
      this.setMicrophoneMediaStream(null);
    }
  }
  (window.Avatar = _e),
    AFRAME.registerComponent("avatar", {
      schema: {
        model: { type: "model" },
        player: { type: "selector", default: "#player" },
        head: { type: "selector", default: "#head" },
        leftHand: { type: "selector", default: "#leftHand" },
        rightHand: { type: "selector", default: "#rightHand" },
        fingers: { type: "bool", default: !0 },
        hair: { type: "bool", default: !0 },
        decapitate: { type: "bool", default: !1 },
        visemes: { type: "bool", default: !0 },
        muted: { type: "bool", default: !0 },
        debug: { type: "bool", default: !1 },
      },
      init: function () {
        if (!this.data.model) {
          console.error("No model was passed to the component!");
          return;
        }
        (this.player = this.data.player),
          (this.head = this.data.head),
          (this.leftHand = this.data.leftHand),
          (this.rightHand = this.data.rightHand),
          this.leftHandControls;
        const e = new MutationObserver(() => {
          (this.leftHandControls =
            this.leftHand.components["tracked-controls-webxr"]),
            e.disconnect();
        });
        e.observe(this.leftHand, { attributes: !0 }), this.rightHandControls;
        const t = new MutationObserver(() => {
          (this.rightHandControls =
            this.leftHand.components["tracked-controls-webxr"]),
            t.disconnect();
        });
        t.observe(this.rightHand, { attributes: !0 }), this.loadModel();
      },
      loadModel: async function () {
        const e = await new Promise((o, r) => {
            new THREE.GLTFLoader().load(
              this.data.model,
              (a) => {
                (a.frustumCulled = !1),
                  a.scene.children[0].children.forEach((n) => {
                    n.type === "SkinnedMesh" &&
                      ((n.material.side = THREE.FrontSide),
                      (n.frustumCulled = !1));
                  }),
                  AFRAME.scenes[0].object3D.add(a.scene),
                  o(a);
              },
              (a) => {},
              r
            );
          }),
          t = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        this.avatar = new _e(e, {
          fingers: this.data.fingers,
          hair: this.data.hair,
          decapitate: this.data.decapitate,
          visemes: this.data.visemes,
          microphoneMediaStream: t,
          muted: this.data.muted,
          debug: this.data.debug,
        });
      },
      tick: function (e, t) {
        if (!this.avatar) return;
        const o = this.player.object3D.position;
        this.avatar.inputs.hmd.position.copy(
          this.head.object3D.position.add(o)
        ),
          this.avatar.inputs.hmd.quaternion.copy(this.head.object3D.quaternion),
          this.avatar.inputs.leftGamepad.position.copy(
            this.leftHand.object3D.position.add(o)
          ),
          this.avatar.inputs.leftGamepad.quaternion.copy(
            this.leftHand.object3D.quaternion
          ),
          this.avatar.inputs.rightGamepad.position.copy(
            this.rightHand.object3D.position.add(o)
          ),
          this.avatar.inputs.rightGamepad.quaternion.copy(
            this.rightHand.object3D.quaternion
          ),
          this.leftHandControls.buttonStates[0] &&
            ((this.avatar.inputs.leftGamepad.pointer =
              this.leftHandControls.buttonStates[0].value),
            (this.avatar.inputs.leftGamepad.grip =
              this.leftHandControls.buttonStates[1].value)),
          this.rightHandControls.buttonStates[0] &&
            ((this.avatar.inputs.rightGamepad.pointer =
              this.rightHandControls.buttonStates[0].value),
            (this.avatar.inputs.rightGamepad.grip =
              this.rightHandControls.buttonStates[1].value)),
          this.avatar.setFloorHeight(0),
          this.avatar.update();
      },
    });
});
