import Application from 'ember-octane-play/app';
import config from 'ember-octane-play/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
