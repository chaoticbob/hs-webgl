/*
Copyright (c) 2015, Hai Nguyen
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided
that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and
the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
*/


/** \class vec2
 *
 */
export default class vec2 {

    /** \fn ctor
     *
     * \brief ctor
     *
     */
    constructor( x, y ) {
        this.m = new Float32Array( 2 );
        this.load( x||0.0, y||0.0);
    }

    /** \fn  ctor
     *
     * \brief create ctor
     *
     */
    static create( x, y ) {
        var result = new vec2();
        result.load( x||0.0, y||0.0 );
        return result;
    }

    /** \fn str
     *
     * \brief str
     *
     */
    str() {
        var result = "<" + this.m[0] + ", " + this.m[1] + ">";
        return result;
    }

    /** \fn x
     *
     * \brief getter for x
     *
     */
    get x() {
        return this.m[0];
    }

    /** \fn y
     *
     * \brief getter for y
     *
     */
    get y() {
        return this.m[1];
    }

    /** \fn x
     *
     * \brief setter for x
     *
     */
    set x(val) {
        this.m[0] = val;
    }

    /** \fn y
     *
     * \brief setter for y
     *
     */
    set y(val) {
        this.m[1] = val;
    }

    /** \fn clone
     *
     * \brief clone
     *
     */
    clone() {
        var result = new vec2( this.m[0], this.m[1] );
        return result;
    }

    /**
     *
     * \brief this = a
     *
     */
    copy(a) {
        this.m[0] = a.m[0];
        this.m[1] = a.m[1];
        return this;
    }

    /** \fn load
     *
     * \brief
     *
     */
    load(x, y) {
        if (x instanceof Array) {
            this.m[0] = x[0];
            this.m[1] = x[1];
        }
        else if (x instanceof vec2) {
            this.m[0] = x.m[0];
            this.m[1] = x.m[1];
        }
        else {
            this.m[0] = x;
            this.m[1] = y;
        }
        return this;
    }

    /** \fn add
     *
     * \brief this = a + b
     *
     */
    add( a, b ) {
        this.m[0] = a.m[0] + b.m[0];
        this.m[1] = a.m[1] + b.m[1];
        return this;
    }

    /** \fn add
     *
     * \brief Returns: a + b
     *
     */
    static add( a, b ) {
        var x = a.m[0] + b.m[0];
        var y = a.m[1] + b.m[1];
        var result = new vec2( x, y );
        return result;
    }

    /** \fn sub
     *
     * \brief this = a - b
     *
     */
    sub(a, b) {
        this.m[0] = a.m[0] - b.m[0];
        this.m[1] = a.m[1] - b.m[1];

        return this;
    }

    /** \fn sub
     *
     * \brief Returns: a - b
     *
     */
    static sub(a, b) {
        var x = a.m[0] - b.m[0];
        var y = a.m[1] - b.m[1];
        var result = new vec2( x, y );
        return result;
    }

    /** \fn mul
     *
     * \brief this = a * b
     *
     */
    mul(a, b) {
        this.m[0] = a.m[0] * b.m[0];
        this.m[1] = a.m[1] * b.m[1];
        return this;
    }

    /** \fn mul
     *
     * \brief Returns: a * b
     *
     */
    static mul(a, b) {
        var x = a.m[0] * b.m[0];
        var y = a.m[1] * b.m[1];
        var result = new vec2( x, y );
        return result;
    }

    /** \fn div
     *
     * \brief this = a / b
     *
     */
    div(a, b) {
        this.m[0] = a.m[0] / b.m[0];
        this.m[1] = a.m[1] / b.m[1];
        return this;
    }

    /** \fn div
     *
     * \brief Returns: a / b
     *
     */
    static div(a, b) {
        var x = a.m[0] / b.m[0];
        var y = a.m[1] / b.m[1];
        var result = new vec2( x, y );
        return result;
    }

    /** \fn scale
     *
     * \brief Scales the current vector
     * \param s
     *
     */
    scale(s) {
        this.m[0] *= s;
        this.m[1] *= s;
        return this;
    }

    /** \fn scaled
     *
     * \brief Returns a scaled copy of the current vector
     * \param s
     *
     */
    scaled(s) {
        var x = this.m[0];
        var y = this.m[1];
        var result = new vec2( x*s, y*s );
        return result;
        return this;
    }


    /** \fn scale
     *
     * \brief Scales the current vector
     * \param s
     *
     */
    static scale(v, s) {
        var x = v.m[0];
        var y = v.m[1];
        var result = new vec2( x*s, y*s );
        return result;
    }

    /** \fn negate
     *
     * \brief this = -this
     *
     */
    negate() {
        this.m[0] = -this.m[0];
        this.m[1] = -this.m[1];
        return this;
    }

    /**
     *
     * \brief Returns: -this
     *
     */
    negated() {
        var result = new vec2( -this.m[0], -this.m[1] );
        return result;
    }

    /**
     *
     * \brief Negated copy of a
     *
     */
    copyNegated( a ) {
        this.m[0] = -a.m[0];
        this.m[1] = -a.m[1];
        return this;
    }

    /**
     *
     * \brief this = normalize( this )
     *
     */
    normalize() {
        var x = this.m[0];
        var y = this.m[1];
        var s = 1.0 / Math.sqrt( x*x + y*y );
        this.m[0] = x*s;
        this.m[1] = y*s;
        return this;
    }

    /**
     *
     * \brief Returns: normalize( this )
     *
     */
    normalized() {
        var x = this.m[0];
        var y = this.m[1];
        var s = 1.0 / Math.sqrt( x*x + y*y );
        var result = new vec2( x*s, y*s );
        return result;
    }

    /**
     *
     * \brief Normalized copy of a
     *
     */
    copyNormalized( a ) {
        var x = a.m[0];
        var y = a.m[1];
        var s = 1.0 / Math.sqrt( x*x + y*y );
        this.m[0] = x*s;
        this.m[1] = y*s;
        return this;
    }

    /**
     *
     * \brief Returns: dot( this, b )
     *
     */
    dot( b ) {
        var xSq = this.m[0] * b.m[0];
        var ySq = this.m[1] * b.m[1];
        var result = xSq + ySq;
        return result;
    }

    /**
     *
     * \brief Returns: dot( a, b )
     *
     */
    static dot( a, b ) {
        var xSq = a.m[0] * b.m[0];
        var ySq = a.m[1] * b.m[1];
        var result = xSq + ySq;
        return result;
    }

    /**
     *
     * \brief Returns: length( this )
     *
     */
    length() {
        var x = this.m[0];
        var y = this.m[1];
        var result = Math.sqrt( x*x + y*y );
        return result;
    }

    /**
     *
     * \brief Returns: lengthSquared( this )
     *
     */
    lengthSquared() {
        var x = this.m[0];
        var y = this.m[1];
        var result = x*x + y*y;
        return result;
    }

    /**
     *
     * \brief distance( this, b )
     *
     */
    distance( b ) {
        var x = this.m[0] - b.m[0];
        var y = this.m[1] - b.m[1];
        var result = Math.sqrt( x*x + y*y );
        return result;
    }

    /**
     *
     * \brief distance( a, b )
     *
     */
    static distance( a, b ) {
        var x = a.m[0] - b.m[0];
        var y = a.m[1] - b.m[1];
        var result = Math.sqrt( x*x + y*y );
        return result;
    }

    /**
     *
     * \brief distanceSquared( this, b )
     *
     */
    distanceSquared( b ) {
        var x = this.m[0] - b.m[0];
        var y = this.m[1] - b.m[1];
        var result = x*x + y*y;
        return result;
    }

    /**
     *
     * \brief distanceSquared( a, b )
     *
     */
    static distanceSquared( a, b ) {
        var x = a.m[0] - b.m[0];
        var y = a.m[1] - b.m[1];
        var result = x*x + y*y;
        return result;
    }

    /**
     *
     * \brief this = lerp( a, b, t )
     *
     */
    lerp( a, b, t ) {
        var dx = b.m[0] - a.m[0];
        var dy = b.m[1] - a.m[1];
        this.m[0] = a.m[0] + t*dx;
        this.m[1] = a.m[1] + t*dy;
        return this;
    }

    /**
     *
     * \brief Returns: lerp(a, b, t)
     *
     */
    static lerp( a, b, t ) {
        var dx = b.m[0] - a.m[0];
        var dy = b.m[1] - a.m[1];
        var result = new vec2();
        result.m[0] = a.m[0] + t*dx;
        result.m[1] = a.m[1] + t*dy;
        return result;
    }

};

vec2.XAXIS = new vec2( 1.0, 0.0 );
vec2.YAXIS = new vec2( 0.0, 1.0 );
