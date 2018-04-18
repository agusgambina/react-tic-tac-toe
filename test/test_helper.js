import { JSDOM } from 'jsdom';
import jquery from 'jquery';
import ReactTestUtils from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';

//Set up testing environment to run like a browser in the command line
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.window = window;
global.document = window.document;

const $ = jquery(window);

// Build a 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass) {
  const componentInstance = ReactTestUtils.renderIntoDocument(<ComponentClass />);

  return $(ReactDOM.findDOMNode(componentInstance));
}

//Build a helper for simulating events

//Set up chai-jquery

export { renderComponent, expect };
