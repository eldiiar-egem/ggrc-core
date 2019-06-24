/*
 Copyright (C) 2019 Google Inc.
 Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
 */

import CanMap from 'can-map';
import CanComponent from 'can-component';
import {isChangeableExternally} from '../../plugins/utils/ggrcq-utils';
import template from './comments-section.stache';
import './comment-data-provider';
import './comment-add-form';
import './mapped-comments';
import './comments-paging';
import Permission from '../../permission';

export default CanComponent.extend({
  tag: 'comments-section',
  view: can.stache(template),
  leakScope: true,
  viewModel: CanMap.extend({
    define: {
      notification: {
        value: 'Send Notifications',
      },
      isDeniedToAddComment: {
        get() {
          const instance = this.attr('instance');

          return !Permission.is_allowed_for('update', instance)
            || instance.attr('archived')
            || isChangeableExternally(instance);
        },
      },
      isAllowedToAddCommentExternally: {
        get() {
          const instance = this.attr('instance');

          return isChangeableExternally(instance);
        },
      },
    },
    instance: null,
  }),
});
